const { Article} = require("../models");

async function authorizDelete (req, res, next) {

  try {
    const {id} = req.params
    const article = await Article.findByPk(id);

    if (!article) {
      throw {name: 'Article Not Found'}
    }
    if (req.user.role === 'Staff' && req.user.id !== article.AuthorId) {
      throw {name: 'You are not Authorized'}
    }

    next()

  } 
  catch (error) {
    next(error)
  }
}

async function authorizStatus (req, res, next) {

  try {
    const {id} = req.params
    const article = await Article.findByPk(id);

    if (!article) {
      throw {name: 'Article Not Found'}
    }
    if (req.user.role === 'Staff') {
      throw {name: 'You are not Authorized'}
    }

    next()

  } 
  catch (error) {
    next(error)
  }
}


module.exports = {authorizDelete, authorizStatus};