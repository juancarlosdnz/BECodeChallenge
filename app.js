require("dotenv").config();
require("./db/index.js");
const ejs = require('ejs');

const express = require("express");
const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.set('view engine', 'ejs')
app.use("", indexRoutes);

require("./error-handling")(app);

module.exports = app;
