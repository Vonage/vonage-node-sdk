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
