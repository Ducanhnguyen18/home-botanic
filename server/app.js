require("@babel/register");
const express = require("express");
const app = express();

const config = require("./config/serverConfig");
config(app);

const PORT = 3000;
const IndexRoute = require("./routes/Index.routes");
const path = require("path");

app.use("/", IndexRoute);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log("Сервер умирает на порту:", PORT);
});
