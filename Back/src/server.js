const http = require("http");
// const fs = require("fs");
const { characters } = require("./utils/data");

const PORT = 3001;

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url === "rickandmorty/character"){
        const characterId = req.url.split("/")[2];
        const character = characters.find(char => char.id === parseInt(characterId));

        if(character){
            res.writeHead("Content-Type", "application/json");
            res.end(JSON.stringify(character))
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`);
})

module.exports = server;