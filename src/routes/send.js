import express from "express";
import CosmeticsArray from "../models/copu.js";
import { v4 } from "uuid";
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

export default Route;
