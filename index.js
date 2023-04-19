import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Worsdfsdfsd!");
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on 4444`);
});
