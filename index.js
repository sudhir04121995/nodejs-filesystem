//import express from "express"
const express = require("express");
const fs = require("fs");

const app = express();

const port = 4848;

app.get("/nodeTask1", (req, res) => {
  let date = new Date();
  let content = date.toUTCString();
  fs.writeFile("./current_date-time.txt", content, (err) => {
    if (err) {
      res.send("error occurred:", err);
    } else {
      fs.readFile("./current_date-time.txt", "utf-8", (err, data) => {
        if (err) {
          res.send(`error occurred in reading:${err}`);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.listen(port, () => console.log(`server started in localhost:${port}`));
