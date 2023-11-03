// const { pagination, pagingData } = require("../helper/pagination");
const { User, Category, Item, Ingredient, sequelize } = require("../models");
const { Op } = require("sequelize");

class ConItem {
  static async showItem(req, res, next) {
    try {
      const { name } = req.query;
      const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
      const items = await Item.findAll({
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
        where: condition,
      });
      // console.log(items);
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async createItem(req, res, next) {
    const trasnCreateItem = await sequelize.transaction();
    try {
      const {
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
        ingredientName,
      } = req.body;
      const item = await Item.create(
        {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
        },
        { transaction: trasnCreateItem }
      );
      const ingredient = await Ingredient.create(
        {
          name: ingredientName,
        },
        { transaction: trasnCreateItem }
      );
      console.log(ingredient);
      await trasnCreateItem.commit();
      res.status(201).json(item);
    } catch (error) {
      await trasnCreateItem.rollback();
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    const { id } = req.params;

    try {
      const item = await Item.findByPk(id);
      if (!item) {
        throw { name: "Item Not Found" };
      }

      const deleted = await Item.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async updateItem(req, res, next) {
    const { id } = req.params;
    const { name, description, price, imgUrl, authorId, categoryId } = req.body;

    try {
      const item = await Item.findByPk(id, {
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      if (!item) {
        throw { name: "Item Not Found" };
      }
      const updatedItem = await item.update({
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
      });
      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConItem;
