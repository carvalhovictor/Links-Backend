const { getMessage } = require("../helpers/messsages");

const TYPE_JSON = "application/json";
const THIS_STATUS_CODE_OK = 200;
const THIS_STATUS_BAD_REQUEST = 400;
const THIS_STATUS_UNAUTHORIZED = 401;
const THIS_STATUS_NOT_FOUND = 404;
const THIS_STATUS_SERVER_ERROR = 500;

const jsonOK = function(data, message, metadata) {
	const status = THIS_STATUS_CODE_OK;
	message = (message) ? message : getMessage("response.json.ok");
	metadata = (metadata) ? metadata : {};

	this.status(status);
	this.type(TYPE_JSON);
	return this.json({ message, data, metadata, status: status });
}

const jsonBadRequest = function(data, message, metadata) {
	const status = THIS_STATUS_BAD_REQUEST;
	message = (message) ? message : getMessage("response.json.bad_request");
	metadata = (metadata) ? metadata : {};

	this.status(status);
	this.type(TYPE_JSON);
	return this.json({ message, data, metadata, status: status });
}

const jsonUnauthorized = function(data, message, metadata) {
	const status = THIS_STATUS_UNAUTHORIZED;
	message = (message) ? message : getMessage("response.json.unauthorized");
	metadata = (metadata) ? metadata : {};

	this.status(status);
	this.type(TYPE_JSON);
	return this.json({ message, data, metadata, status: status });
}

const jsonNotFound = function(data, message, metadata) {
	const status = THIS_STATUS_NOT_FOUND;
	message = (message) ? message : getMessage("response.json.not_found");
	metadata = (metadata) ? metadata : {};

	this.status(status);
	this.type(TYPE_JSON);
	return this.json({ message, data, metadata, status: status });
}

const jsonServerError = function(data, message, metadata) {
	const status = THIS_STATUS_SERVER_ERROR;
	message = (message) ? message : getMessage("response.json.server_error");
	metadata = (metadata) ? metadata : {};

	this.status(status);
	this.type(TYPE_JSON);
	return this.json({ message, data, metadata, status: status });
}

const response = (req, res, next) => {
	res.jsonOK = jsonOK;
	res.jsonBadRequest = jsonBadRequest;
	res.jsonUnauthorized = jsonUnauthorized;
	res.jsonNotFound = jsonNotFound;
	res.jsonServerError = jsonServerError;

	next();
};

module.exports = response;