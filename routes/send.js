const express = require('express')
const CosmeticsArray = require("../models/copu.js")
const { v4 } = require("uuid");
const Route = express.Router();

Route.route("/").post(async (r, s) => {
  let content = r.body;

  await CosmeticsArray.create({
    id:v4(),
    ...content,
  });

  s.json(content);
}).delete(async (r , s) =>{
    let {id} = r.body;
    console.log(id);
    try {
      await CosmeticsArray.deleteOne({_id: id})
    } catch (error) {
      console.log(error);
    }
})
module.exports = Route;
