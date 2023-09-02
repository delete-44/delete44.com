const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    blueskyLink: "https://bsky.app/profile/delete44.bsky.social",
    githubLink: "https://github.com/delete-44",
    linkedinLink: "https://www.linkedin.com/in/delete44/",
    gravatarLink:
      "https://s.gravatar.com/avatar/27daea5cb28598ef30526f1586d9affb",
    writeAsLink: "https://write.as/delete44/",
    githubRepoLink: "https://github.com/delete-44/delete44.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        port: "",
        pathname: "/avatar/*",
      },
    ],
  },
};
