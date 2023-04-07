require("dotenv").config();
const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");

server.use(express.json());

server.use(cors());

server.use("/", router);

server.use("/rickandmorty", router);

server.listen(PORT, () => {console.log("Server raised in port " + PORT)});

// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");

// const server = http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;

//     if(url.includes("onsearch")){
//         const id = url.split("/").at(-1);

//         getCharById(res, id);
//     }

//     if(url.includes("detail")){
//         const characterId = url.split("/").pop();

//         getCharDetail(res, characterId);
//     }
// })
// server.listen(3001, "localhost", () => {
//     console.log("Server listening on port 3001")
// });

module.exports = server;