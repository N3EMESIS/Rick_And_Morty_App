const http = require("http");
// const fs = require("fs");
const data = require("./utils/data");

http.createServer((req, res) => {
    console.log(`Server raised in port 3001`);
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { url } = req

    if(url.includes("rickandmorty/character")){
        const characterId = url.split("/").at(-1);
        const character = data.find(char => char.id == characterId);

        if(character){
            res.writeHead(200, {"Content-Type":"application/json"});
            return res.end(JSON.stringify(character))
        } else {
            res.writeHead(404, {"Content-Type":"application/json"});
            return res.end(JSON.stringify({error: "Character not found"}))
        }
    }
}).listen(3001, "localhost");

module.exports = null;