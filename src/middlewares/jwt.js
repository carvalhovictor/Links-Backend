const {verifyJWT} = require("../helpers/jwt");

const checkJWT = (req, res, next) => {
	const { url:path } = req;

	const excludedPaths = ["/auth/sign-in", "/auth/sign-up"];
	const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));
	if(isExcluded) return next();

	let token = req.headers["authorization"];
	token = token ? token.slice(7, token.length) : null; //pra tirar o Bearer 
	if(!token) {return res.jsonUnauthorized(null, "Invalid token")};

	try{
		const decoded = verifyJWT(token); 
		req.accountId = decoded.id;
		next();
	}catch(error) {
		return res.jsonUnauthorized(null, "Invalid token");
	}
	
};

module.exports = checkJWT;