require("dotenv").config();
const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const cors = require("cors");

const { conn } = require("./DB_connection");

server.use(express.json());

server.use(cors());

server.use("/rickandmorty", router);

// conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log("Server raised in port " + PORT)
    });
// })

module.exports = server;