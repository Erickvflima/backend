const jwt = require("jsonwebtoken");

function token(req, res, next) {
  var token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ message: `Erro: token não encontrado` });
  jwt.verify(token, "stringsecret", function (err, decoded) {
    if (err) return res.status(401).json({ message: `Erro: token Expirado` });
    req.userId = decoded.id;
    next();
  });
}

module.exports = token;
