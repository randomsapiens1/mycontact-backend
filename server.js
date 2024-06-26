const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler); // Error handler middleware should be registered after all routes

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
