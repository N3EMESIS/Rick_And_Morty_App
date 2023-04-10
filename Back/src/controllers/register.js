const { User } = require("../DB_connection");

const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({
            email, 
            password: bcrypt.hashSync(password, 10)
        });
        res.status(201).json({ message: "Usuario creado con éxito", user});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message});
    }
}

module.exports = register;