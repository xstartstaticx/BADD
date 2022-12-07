const express = require("express");
const app = express();

require("dotenv").config();

const dbConnect = require("./config/db");
dbConnect(); // connects to db

const port = process.env.PORT || 4001;
app.listen(port, () => console.log("Server is up and running at port", port));
