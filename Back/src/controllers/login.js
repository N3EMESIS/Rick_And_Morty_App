const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) return res.status(400).json({ message: "Faltan datos" });

        const [user, created] = await User.findOrCreate({
            where: { email } ,
            defaults: { password }
        });
        
        if(!user) return res.status(404).json({ message: "Usuario no encontrado" });
        if(user.password !== password) return res.status(403).json({ message: "Contraseña incorrecta" });

        res.status(200).json({ access: true });
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }
}

module.exports = login;