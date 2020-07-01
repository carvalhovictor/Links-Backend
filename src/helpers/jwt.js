require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_PRIVATE_KEY;

const options = { expiresIn: "30 minutes"};
const refreshOptions = { expiresIn: "30 days"};

const generateJWT = payload => {
	return jwt.sign(payload, tokenPrivateKey, options);
};

const generateRefreshJWT = payload => {
	return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions);
};

const verifyJWT = token => {
	return jwt.verify(token, tokenPrivateKey);
}

const verifyRefreshJWT = token => {
	return jwt.verify(token, refreshTokenPrivateKey);
}

module.exports = { generateJWT, generateRefreshJWT, verifyJWT, verifyRefreshJWT };