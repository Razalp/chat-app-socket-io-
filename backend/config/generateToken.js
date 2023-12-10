const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    // Assuming userId is the information you want to encode in the token
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });
};

module.exports = generateToken;
