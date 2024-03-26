const express = require("express");
const router = express.Router();
const {getContacts,createContact, getContact, updateContact, deleteContact} = require("../controllers/contactController")

//GET all contact and CREATE
router.route("/").get(getContacts).post(createContact);


//GET specific id, UPDATE and DELETE
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;