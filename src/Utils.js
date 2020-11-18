var querystring = require("querystring");

exports.createPathWithQuery = function(path, query) {
  if (!query) {
    throw new Error('"query" is a required parameter');
  }

  var pathExt = "";
  if (typeof query === "string") {
    // single call Id
    pathExt = `/${query}`;
  } else if (typeof query === "object" && Object.keys(query).length > 0) {
    // filter
    pathExt = `?${querystring.stringify(query)}`;
  }

  return `${path}${pathExt}`;
};

exports.getQuery = function(path) {
  return querystring.parse(path.split("?")[1]);
};

exports.sendError = function(callback, err, returnData) {
  // Throw the error in case if there is no callback passed
  if (callback) {
    callback(err, returnData);
  } else {
    throw err;
  }
};

exports.clone = function(a) {
  return JSON.parse(JSON.stringify(a));
};
