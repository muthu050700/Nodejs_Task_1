const express = require("express"); // importing express liberary
const { createFolder, getFiles } = require("./fs-inbuilt.js"); // importing the functions has a common js
const server = express();

// POST Method

server.post("/create-file", (req, res) => {
  const timeStramp = (Date.now() / 1000).toFixed(0).toString();
  const date = new Date();
  const ISOString = date.toISOString().replaceAll(":", "-").split(".")[0];

  createFolder("./api-files", `${ISOString}.txt`, timeStramp, () => {
    res.status(201).json({ msg: "The file created successfully" });
  });
});

//GET Method

server.get("/get-api-files", (req, res) => {
  getFiles("./api-files", (data) => {
    res.json(data),
      () => {
        res.status(500).json({ msg: "something went wrong" });
      };
  });
});

// creating a PORT

const PORT = 4500;
server.listen(PORT, () => {
  console.log("The server is running", PORT);
});
