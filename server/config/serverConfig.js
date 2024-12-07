const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const ssr = require("../middleware/ssr");
const getUser = require("../middleware/getUser");
const sessionConfig = require("../config/sessionConfig");
const cors = require("cors");
const path = require("path");

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

const serverConfig = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("public"));
  app.use(express.static(path.resolve(__dirname, "../../client/dist")));
  app.use(ssr);
  app.use(getUser);
  app.use(cors(corsOption));
};

module.exports = serverConfig;
