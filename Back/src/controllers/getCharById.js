const axios = require("axios");
const { KEY, URL } = process.env;

const getCharById = (req, res) => {
    const { id } = req.params;
    axios.get(`${URL}/character/${id}?key=${KEY}`)
      .then(response => {
        const { id, name, species, image, gender } = response.data;
        const character = { id, name, species, image, gender };
        res.status(200).json(character);
      })
      .catch(error => {
        res.status(500).json({ error: error.message});
      })
}

module.exports = getCharById;

// const successH = ((response, res) => {
//     const { id, image, name, gender, species } = response.data;
//     res.writeHead(200, {"Content-Type":"application/json"});
//     res.end(JSON.stringify({ id, name, gender, species, image }));
// }); 

// const errorH = (error, res) => {
//     res.writeHead(500, {"Content-Type":"text/plain"});
//     res.end(error.message);
// }

// const getCharById = (res, ID) => {
//     axios
//         .get(`${URL}/character/${ID}?key=${KEY}`)
//         .then(response => successH(response, res))
//         .catch(error => errorH(error, res))
// };
