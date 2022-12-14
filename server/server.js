const express = require("express");
require("dotenv").config();
const app = express();
const dbConnect = require("./config/db");
dbConnect();

app.use(express.json());
app.use("/users", require("./routes/userRoutes"));
app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log("server is up and running");
});
