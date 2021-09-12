const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.get("/", blogController.blog_index);

router.get("/:id", blogController.blog_details);

router.post("/", blogController.blog_create);

router.put("/:id", blogController.blog_put);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
