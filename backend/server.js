const express = require("express");
const router = express.Router();
const controller = require("./controllers/index")


router.get("/", controller.authors.getAll);
router.get("/", controller.authors.post);


module.exports = router;