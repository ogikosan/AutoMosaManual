import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookies = req.headers.cookie?.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {}) || {};

  const token = cookies.auth_token;

  if (!token) {
    return res.status(401).json({ error: 'No authentication token' });
  }

  try {
    const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
    const decoded = jwt.verify(token, jwtSecret);
    
    res.status(200).json({
      authenticated: true,
      user: {
        userId: decoded.userId,
        username: decoded.username,
        roles: decoded.roles
      }
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}