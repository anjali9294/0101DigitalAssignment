import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cors from "cors";

import User from "./Model/User.js";
import { login, register } from "./Controller/User.js";

// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "employees",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const app = express();

// Using Middlewares
app.use(cors());
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// Setting up View Engine
app.set("view engine", "ejs");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const decoded = jwt.verify(token, "sdjasdbajsdbjasd");

    req.user = await User.findById(decoded._id);

    next();
  } else {
    res.send({ message: "token is not valid or expired" });
  }
};

app.post("/login", login);

app.post("/register", register);

app.listen(5000, () => {
  console.log("Server is working");
});
