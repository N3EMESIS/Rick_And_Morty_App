const axios = require("axios");
const { KEY, URL } = process.env;

const successH = ((response, res) => {
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
        .get(`${URL}/character/${ID}?key=${KEY}`)
        .then(response => successH(response, res))
        .catch(error => errorH(error, res))
};

module.exports = getCharDetail;