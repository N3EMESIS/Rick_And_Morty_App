const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const favs = require("../utils/favs");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/fav", (req, res) => {
    const { body } = req;
    favs.push(body);
    res.status(200).json({ "message": "Character added to favorites." });
});

router.get("/fav", (req, res) => {
    res.status(200).json(favs);
});

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params;
    const deleteFav = favs.findIndex((fav) => {
        fav.id === Number(id);
    })
    if(deleteFav){
        favs.splice(deleteFav, 1);
        res.status(200).json({ "message": "Personaje eliminado con éxito."});
    } else {
        res.status(400).json({ "message": "Error. Id no encontrado"});
    }
})

module.exports = router;