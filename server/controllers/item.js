// const { pagination, pagingData } = require("../helper/pagination");
const { User, Category, Item, Ingredient } = require("../models");
const { Op } = require("sequelize");
// const baseUrl = 'https://ch1news.gemaramadhan.online'
const baseUrl = "http://localhost:3000";

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

  // static async showArticleCustomer(req, res, next) {
  //   try {
  //     const { name } = req.query;
  //     const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  //     const articles = await Article.findAndCountAll({
  //       include: [{ model: Category }],
  //       order: [["title", "ASC"]],
  //       where: condition,
  //       offset,
  //       limit,
  //     });
  //     // console.log(articles);
  //     const { totalPage, currentPage } = pagingData(
  //       articles.count,
  //       limit,
  //       page
  //     );
  //     res.status(200).json({ articles, totalPage, currentPage });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // static async showArticleDetail(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const detail = await Article.findByPk(id, {
  //       include: [
  //         { model: User, attributes: { exclude: ["password"] } },
  //         { model: Category },
  //       ],
  //     });
  //     if (!detail) {
  //       throw { name: "Article Not Found" };
  //     }
  //     const qrCode = await axios.post(
  //       `https://api.qr-code-generator.com/v1/create?access-token=${process.env.APIKEY_QR}`,
  //       {
  //         frame_name: "no-frame",
  //         qr_code_text: `${baseUrl}/cust/articles/${id}`,
  //         image_format: "SVG",
  //         qr_code_logo: "scan-me-square",
  //       }
  //     );
  //     res.status(200).json({ detail, qrCode: qrCode.data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  static async createItem(req, res, next) {
    try {
      const { name, description, price, imgUrl, authorId, categoryId } =
        req.body;
      const article = await Item.create({
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
      });
      res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  }

  static async findArticle(req, res, next) {
    const { id } = req.params;
    // console.log(id);
    const article = await Article.findByPk(id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Category,
        },
      ],
    });
    try {
      if (!article) {
        throw { name: "Article Not Found" };
      }
      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  }

  static async deleteArticle(req, res, next) {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    try {
      if (!article) {
        throw { name: "Article Not Found" };
      }

      const deleted = await Article.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  }

  static async updateArticle(req, res, next) {
    const { id } = req.params;
    const { title, content, imgUrl, AuthorId, CategoryId } = req.body;

    const article = await Article.findByPk(id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Category,
        },
      ],
    });
    try {
      if (!article) {
        throw { name: "Article Not Found" };
      }
      const updatedArticle = await article.update({
        title,
        content,
        imgUrl,
        AuthorId,
        CategoryId,
      });
      ConItem.logData(
        updatedArticle.title,
        `Update Article with id: ${updatedArticle.id} succed`,
        req.headers.email
      );
      res.status(200).json(updatedArticle);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req, res, next) {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const article = await Article.findByPk(id, {
        include: [
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
          {
            model: Category,
          },
        ],
      });
      if (!article) {
        throw { name: "Article Not Found" };
      }
      const oldStatus = article.status;
      const updatedArticle = await article.update({ status });
      ConItem.logData(
        article.title,
        `Update Status Article with id: ${article.id} from ${oldStatus} to ${updatedArticle.status}`,
        req.headers.email
      );
      res.status(200).json(updatedArticle);
    } catch (error) {
      next(error);
    }
  }

  static async showHistory(req, res, next) {
    try {
      const histories = await History.findAll();
      // console.log(articles);
      res.status(200).json(histories);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConItem;
