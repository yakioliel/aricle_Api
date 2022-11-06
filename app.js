const express = require("express");
const app = express();
const morgan = require("morgan");
const articlesRouts = require("../api/routs/article");
const categoryRouts = require("../api/routs/Category");
const userRouts = require("../api/routs/user");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/youtube-article-api", {});
mongoose.connection.on("connected", () => {
  console.log("MongoDb connected");
});
app.use(morgan("dev"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-Whit,Content-Type,Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST,PATCH ,DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello World3",
  });
});

app.use("/articles", articlesRouts);
app.use("/Category", categoryRouts);
app.use("/user", userRouts);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      massage: error.message,
    },
  });
});
module.exports = app;
