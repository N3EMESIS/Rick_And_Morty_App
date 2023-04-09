const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
    if(!name || !origin || !status || !image || !species || !gender) return res.status(401).json({ message: "Faltan datos" });
    try {
        const [favorite, created] = await Favorite.findOrCreate({ where: { name }, defaults: { name, origin, status, image, species, gender } });
        
        const allFavorites = await Favorite.findAll();
        res.status(201).json(allFavorites);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = postFav;