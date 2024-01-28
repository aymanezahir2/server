const express = require('express')
const cosmitiCS = require("../models/copu.js")
const Route = express.Router();

Route.route("/").get(async (r, s) => {
  const cosmeticsData = await cosmitiCS.find();

  s.json(cosmeticsData);
});

module.exports = Route;