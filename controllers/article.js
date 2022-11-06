const mongoose = require("mongoose");
const Article = require("../moduls/article");
const Category = require("../moduls/category");

module.exports = {
  getAllArticles: (req, res) => {
    try {
      Article.find()
        .populate(categoryId, title)
        .then((article) => {
          res.status(200).json({
            article,
          });
        });
    } catch {
      (err) => {
        res.status(500).json({
          err,
        });
      };
    }
  },

  createArticle: (req, res) => {
    const { title, description, content, categoryId } = req.body;
    try {
      Category.findById((somting) => {
        if (!somting) {
          return res.status(404).json({
            massage: "category not found",
          });
        }

        const article = new Article({
          _id: new mongoose.Types.ObjectId(),
          title,
          description,
          content,
          categoryId,
        });
        return article.save();
      }).then(() => {
        res.status(200).json({
          message: "CreatE Article",
        });
      });
    } catch {
      (err) => {
        res.status(500).json({
          err,
        });
      };
    }
  },

  updateArticle: (req, res) => {
    try {
      const articleId = req.params.articleId;

      Article.updateMany({ _id: articleId }, req.body).then(() => {
        res.status(200).json({
          message: "Article Update",
        });
      });
    } catch {
      (err) => {
        res.status(500).json({
          err,
        });
      };
    }
  },

  deleteArticle: (req, res) => {
    try {
      const articleId = req.params.articleId;

      Article.remove({ _id: articleId }).then(() => {
        res.status(200).json({
          message: "Article Delete",
        });
      });
    } catch {
      (err) => {
        res.status(500).json({
          err,
        });
      };
    }
  },

  getArticle: (req, res) => {
    const articleId = req.params.articleId;
    try {
      Article.findById(articleId).then((article) => {
        res.status(200).json({
          article,
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        err,
      });
    }
  },
};
