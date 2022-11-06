const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  getArticle,
} = require("../controllers/article");

router.get("/", getAllArticles);
router.post("/", createArticle);
router.patch("/:articleId", updateArticle);
router.delete("/:articleId", deleteArticle);
router.get("/:articleId", getArticle);

module.exports = router;
