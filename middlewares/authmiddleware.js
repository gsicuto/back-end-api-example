const jwt = require('jsonwebtoken');

module.exports =  (req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'request sem token' });
  }
  const tokenWithoutBearer = token.split(' ')[1];

  try {
    const decodedToken = jwt.verify(tokenWithoutBearer, process.env.JWT_PASS);
    req.user = { id: decodedToken.id, name: decodedToken.name };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalido ou expirado' });
  }
};
