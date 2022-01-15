const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", function (req, res) {
  res.json("Hello World");
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
