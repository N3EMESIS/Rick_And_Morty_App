// const fs = require("fs");
// const data = require("./utils/data");

// http.createServer((req, res) => {
//     console.log(`Server raised in port 3001`);
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     const { url } = req
    
//     if(url.includes("rickandmorty/character")){
//         const characterId = url.split("/").at(-1);
//         const character = data.find(char => char.id == characterId);
        
//         if(character){
//             res.writeHead(200, {"Content-Type":"application/json"});
//             return res.end(JSON.stringify(character))
//         } else {
//             res.writeHead(404, {"Content-Type":"application/json"});
//             return res.end(JSON.stringify({error: "Character not found"}))
//         }
//     }
// }).listen(3001, "localhost");
                
// module.exports = null;
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