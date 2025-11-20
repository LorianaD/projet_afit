const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.Users;

const saltRounds = 10;

async function register(payload) {
    const { name, firstname, username, email, password, birthday, height, gender, weight, goal } = payload;

    const hash = await bcrypt.hash(password, saltRounds);

    try {
        const user = await User.create({name, firstname, username, email, password: hash, birthday, height, gender, weight, goal });
        return user;        
    } catch (error) {
        console.error("Erreur dans authService.register :", error);
        throw error;
    }

}

async function validateCredentials({email, password}) {
    const user = await User.findOne({where: {email}});
    if (!user) {
        return null;
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if (isValid) {
        return user;
    } else {
        return null;
    }
}

function generateToken(user) {
    return jwt.sign(
        {
            sub: user.id,
            username: user.username,
        },
        process.env.JWT_TOKEN,
        {
            expiresIn: '7d'
        }
    )
}

module.exports = {
    register,
    validateCredentials,
    generateToken
}