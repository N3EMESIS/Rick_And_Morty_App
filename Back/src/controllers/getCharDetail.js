const axios = require("axios");
const { KEY, URL } = process.env;

const getCharDetail = (req, res) => {
    const { params } = req;
    axios
        .get(`${URL}/character/${params.id}?key=${KEY}`)
        .then(response => {
            const { id, name, species, image, gender, origin } = response.data;
            const character = { id, name, species, image, gender, origin };
            res.status(200).json(character);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ "message": "Error fetching character from API"})
        })
};

module.exports = getCharDetail;