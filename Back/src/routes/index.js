const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const register = require("../controllers/register"); 

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/login", login);

router.post("/register", register)

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;