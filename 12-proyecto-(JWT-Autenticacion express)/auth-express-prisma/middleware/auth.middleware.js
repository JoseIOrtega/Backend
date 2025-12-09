const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(401).json({ msg: "Token requerido" });
  try {
    // El token llega como: "Bearer asd123123123"
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token inválido o expirado" });
  }
};