export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const clientId = process.env.DISCORD_CLIENT_ID || '1352772500647444570';
  const redirectUri = process.env.DISCORD_REDIRECT_URI || `${req.headers.origin}/api/auth/callback`;
  const scope = 'identify guilds guilds.members.read';
  
  // 状態トークンを生成（CSRF対策）
  const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
  // セッションに状態を保存（簡易実装）
  res.setHeader('Set-Cookie', `auth_state=${state}; Path=/; HttpOnly; SameSite=Strict; Max-Age=600`);
  
  const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}&state=${state}`;
  
  res.redirect(authUrl);
}