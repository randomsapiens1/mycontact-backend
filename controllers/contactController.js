//@description get all contacts
//@routes GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "get all contacts" });
};

//@description get specific contact
//@routes GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({ message: `get contacts for ${req.params.id}`});
};

//@description create new contact, POST
//@routes POST /api/contacts/:id
//@access public

const createContact = (req, res) => {
    res.status(201).json({ message: "Create contact"});
    console.log("The request body is:", req.body);
};

//@description update specific contact
//@routes UPDATE /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}`});
};

//@description Delete specific contact
//@routes DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete contacts for ${req.params.id}`});
};


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};