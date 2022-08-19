const jwt_decode = require("jwt-decode");

module.exports = authenticateToken;

async function authenticateToken(req, res, next) {
  try {
    let token = jwt_decode(req.headers.authorization);
    req.user_id = token.sub;
    next();
  } catch (error) {
    next({ status: true, code: 401 });
  }
}
