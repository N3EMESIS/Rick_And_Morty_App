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
