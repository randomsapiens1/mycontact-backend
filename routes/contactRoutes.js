const express = require("express");
const router = express.Router();

//GET all contact
router.route("/").get();

//GET specific id /:id
router.route("/:id").get();

//CREATE contact
router.route("/").post();

//UPDATE contact
router.route("/:id").put();

//DELETE contact
router.route("/:id").delete();

module.exports = router;