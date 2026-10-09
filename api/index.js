import { createApp } from "../src/app.js";
import { connectDB } from "../src/config/db.js";
import mongoose from "mongoose";

const app = createApp();

export default async function handler(req, res) {
  console.log("request received");
  if (mongoose.connection.readyState !== 1) {
    await connectDB();
  }
  return app(req, res);
}
