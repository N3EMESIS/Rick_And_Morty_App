const axios = require("axios");

const getCharDetail = (res, ID) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${ID}`)
        .then((response) => {
            const { image, name, gender, status, origin, species } = response.data;
            const obj = { image, name, gender, status, origin, species };
            res.writeHead(200, {"Content-Type":"application/json"});
            res.end(JSON.stringify(obj));
        })
        .catch((error) => {
            res.writeHead(500, {"Content-Type":"text/plain"});
            res.end(console.log(error.message));
        })
}

module.exports = getCharDetail;