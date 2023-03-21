export function validateUsername(username) {
    if(!username){
        return "El nombre de usuario es requerido.";
    } else if (username.length > 35){
        return "El nombre de usuario no puede tener más de 35 caracteres.";
    } else if (!/\S+@\S+\.\S+/.test(username)){
        return "El nombre de usuario debe ser un email válido";
    } else {
        return "";
    }
}

export function validatePassword(password) {
    if(!password) {
        return "La contraseña es requerida.";
    } else if(password.length < 6 || password.length > 10){
        return "La contraseña debe tener entre 6 y 10 caracteres.";
    } else if(!/\d/.test(password)){
        return "La contraseña debe tener al menos un número.";
    } else {
        return "";
    }
}