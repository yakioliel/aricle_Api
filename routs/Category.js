const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
} = require("../controllers/Category");

router.get("/", getAllCategory);
router.post("/", createCategory);
router.get("/:categoryId", getCategory);
router.patch("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

module.exports = router;
