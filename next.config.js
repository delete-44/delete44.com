const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
  },
  env: {
    twitterLink: "https://twitter.com/_delete44",
    githubLink: "https://github.com/delete-44",
    linkedinLink: "https://www.linkedin.com/in/delete44/",
    gravatarLink:
      "https://s.gravatar.com/avatar/27daea5cb28598ef30526f1586d9affb",
    stackshareLink: "https://stackshare.io/delete-44/tools",
  },
};
