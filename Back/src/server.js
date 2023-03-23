require("dotenv").config();
const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if(url.includes("onsearch")){
        const id = url.split("/").at(-1);

        getCharById(res, id);
    }

    if(url.includes("detail")){
        const characterId = url.split("/").pop();

        getCharDetail(res, characterId);
    }
})
server.listen(3001, "localhost", () => {
    console.log("Server listening on port 3001")
});

module.exports = server;