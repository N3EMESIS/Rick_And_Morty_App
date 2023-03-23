const axios = require("axios");

const successH = ((response) => {
    const { id, image, name, gender, species } = response.data;
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({ id, name, gender, species, image }));
}); 

const errorH = (error, res) => {
    res.writeHead(500, {"Content-Type":"text/plain"});
    res.end(error.message);
}

const getCharById = (res, ID) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => successH(response, res))
        .catch(error => errorH(error, res))
};

module.exports = getCharById;