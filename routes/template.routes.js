const { Router } = require("express");
const route = Router();
const {
  getTemplate,
  } = require("../controllers/template.controllers");

route
  .get("/:type/:days", getTemplate)
  

module.exports = route;