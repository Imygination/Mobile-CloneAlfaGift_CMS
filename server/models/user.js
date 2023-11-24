"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Item, { foreignKey: "authorId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email already exist",
        },
        validate: {
          notEmpty: {
            msg: "Email Cannot Empty",
          },
          notNull: {
            msg: "Email Required",
          },
          isEmail: {
            msg: "Email not valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password Cannot Empty",
          },
          notNull: {
            msg: "Password Required",
          },
          len: {
            msg: "Password minimum length is 5",
            args: [5],
          },
        },
      },
      role: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((user, option) => {
    user.password = hashPassword(user.password);
  });

  return User;
};
