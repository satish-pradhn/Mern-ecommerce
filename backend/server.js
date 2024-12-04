import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hooray you have send us an request");
});

app.get("/api/products")

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port ${PORT}`);
});
