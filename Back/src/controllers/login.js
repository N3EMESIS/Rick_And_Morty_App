const { User } = require("../DB_connection");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if(!username || !password) return res.status(400).json({ message: "Faltan datos" });

        const [user] = await User.findOne({
            where: { username }
        });
        
        if(!user) return res.status(404).json({ message: "Usuario no encontrado" });

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if(!isPasswordValid) return res.status(403).json({ message: "Contraseña incorrecta" });

        res.status(200).json({ access: true });
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }
}

module.exports = login;