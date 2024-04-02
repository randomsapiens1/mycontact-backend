const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@description get all contacts
//@routes GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@description get specific contact
//@routes GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `get contacts for ${req.params.id}`});
});

//@description create new contact, POST
//@routes POST /api/contacts/:id
//@access public

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
  
    res.status(201).json(contact);
  });

//@description update specific contact
//@routes UPDATE /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}`});
});

//@description Delete specific contact
//@routes DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req, res) => {
    res.status(201).json({ message: `Delete contacts for ${req.params.id}`});
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};