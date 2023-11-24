const { verifyToken } = require("../helper/jwt");
const { User } = require("../models");

async function authen(req, res, next) {
  try {
    const payload = verifyToken(req.headers.access_token);
    const user = await User.findByPk(payload.id);
    // console.log(user);
    if (!user) {
      throw { name: "User not Found" };
    }
    req.user = { id: user.id, email: user.email, role: user.role };
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authen;
