const { checkPassword } = require("../helper/bcryptjs");
const { signToken } = require("../helper/jwt");
const { User} = require("../models");

class ConUser {
  static async createUser(req, res, next) {
    try {
      const { username, email, password, role, phoneNumber, address } =
        req.body;
      // console.log(username, email, password, role, phoneNumber, address);
      const newUser = await User.create({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      res.status(201).json({
        message: `Succed add ${newUser.role} with id ${newUser.id} and email ${newUser.email}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw { name: "Email and Password cannot empty" };
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Invalid email or Password" };
      }

      const correctPass = checkPassword(password, user.password);
      if (!correctPass) {
        throw { name: "Invalid email or Password" };
      }

      const token = signToken({
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username,
      });
      res.status(200).json({
        accessToken: token,
        email: user.email,
        role: user.role,
        id: user.id,
        username: user.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConUser;
