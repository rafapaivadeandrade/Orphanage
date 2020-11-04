const express = require("express");
const routes = require("./routes");
const path = require("path");
const cors = require("cors");
const apiErrorHandler = require("./errors/handler");
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));
app.use(apiErrorHandler);
app.listen(3333);
// npx knex migrate:latest
// npx knex migrate:rollback
