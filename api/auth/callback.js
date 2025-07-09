import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, state } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'Authorization code not provided' });
  }

  // 状態トークンの検証
  const cookies = req.headers.cookie?.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {}) || {};
  
  if (!state || cookies.auth_state !== state) {
    return res.status(400).json({ error: 'Invalid state parameter' });
  }

  const clientId = process.env.DISCORD_CLIENT_ID || '1352772500647444570';
  const clientSecret = process.env.DISCORD_CLIENT_SECRET || 'qP8m9LeqEu08rVQ809FzQUbLChx0yinQ';
  const redirectUri = process.env.DISCORD_REDIRECT_URI || `${req.headers.origin}/api/auth/callback`;
  const guildId = '1284394665319206998';
  const allowedRoleIds = [
    '1290180982506389524',  // 運営メンバー
    '1384073838140325979',  // モザイク安心パック
    '1384074109977362523',  // 全部入りプレミアム
    '1384651939572351056'   // テスト会員
  ];

  try {
    // アクセストークンを取得
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri
      })
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // ユーザー情報を取得
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user information');
    }

    const userData = await userResponse.json();

    // ギルドメンバー情報を取得
    const memberResponse = await fetch(`https://discord.com/api/users/@me/guilds/${guildId}/member`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!memberResponse.ok) {
      throw new Error('Failed to fetch guild member information');
    }

    const memberData = await memberResponse.json();
    const userRoles = memberData.roles || [];

    // ロール確認
    const hasAllowedRole = allowedRoleIds.some(roleId => userRoles.includes(roleId));

    if (!hasAllowedRole) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    // JWTトークンを生成
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
    const token = jwt.sign(
      {
        userId: userData.id,
        username: userData.username,
        roles: userRoles,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30) // 30日間有効
      },
      jwtSecret
    );

    // 認証成功時のクッキーを設定
    res.setHeader('Set-Cookie', [
      `auth_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${60 * 60 * 24 * 30}`,
      `auth_state=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0` // 状態トークンを削除
    ]);

    // 認証成功ページにリダイレクト
    res.redirect('/auth/success.html');
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}