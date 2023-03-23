const axios = require("axios");

const successH = ((response) => {
    const { image, name, gender, status, origin, species } = response.data;
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify({ image, name, gender, status, origin, species }));
}); 

const errorH = (error, res) => {
    res.writeHead(500, {"Content-Type":"text/plain"});
    res.end(error.message);
}

const getCharDetail = (res, ID) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => successH(response, res))
        .catch(error => errorH(error, res))
};

module.exports = getCharDetail;