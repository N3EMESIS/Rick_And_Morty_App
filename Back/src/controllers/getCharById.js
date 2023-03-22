const axios = require("axios");

const getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((response) => {
        const obj = {
            id: response.data.id, 
            image: response.data.image,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species
        }
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(obj));
    })
    .catch((error) => {
        res.writeHead(500, {"Content-Type":"text/plain"});
        res.end(console.log(error));
    })
}

module.exports = getCharById;