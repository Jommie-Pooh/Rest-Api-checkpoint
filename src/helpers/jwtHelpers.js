const jwt = require("jsonwebtoken");
const generateToken = (payload, expiresIn, secret) => {
  return jwt.sign(payload, secret, { expiresIn });
};
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};
module.exports = { generateToken, verifyToken };