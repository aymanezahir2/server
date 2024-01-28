import express from "express";
import cosmitiCS from "../models/copu.js";
import mongoose from "mongoose";
const Route = express.Router();

Route.route("/").get(async (r, s) => {
  const cosmeticsData = await cosmitiCS.find();

  s.json(cosmeticsData);
});

export default Route;
