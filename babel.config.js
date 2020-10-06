module.exports = function(api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-typescript",
    {
      targets: {
        modules: false,
        node: "10"
      }
    }
  ];

  const plugins = ["@babel/plugin-proposal-object-rest-spread"];

  return {
    presets,
    plugins
  };
};
