const { verifyJWT, getTokenFromHeaders } = require("../helpers/jwt");

const checkJWT = (req, res, next) => {

	const { url: path } = req;
	const excludedPaths = ["/auth/sign-in", "/auth/sign-up", "/auth/refresh"];
	const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));
	if(isExcluded) return next();

	const token = getTokenFromHeaders(req.headers);
	if(!token) return res.jsonUnauthorized(null, "Invalid token");

	
	try {
		const decoded = verifyJWT(token);
		req.accountId = decoded.id;
		next();
	} catch (error) {
		return res.jsonUnauthorized(null, "Invalid token");
	}

};

module.exports = checkJWT;