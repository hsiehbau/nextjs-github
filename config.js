const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize";
const SCOPE = "user";
const github = {
  client_id: "c6138bd9dc4d68db97b3",
  client_secret: "248ed8b52fb561f66624e1a1fb351c3f77392af8",
  request_token_url: "https://github.com/login/oauth/access_token"
};

module.exports = {
  github,
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${github.client_id}&scope=${SCOPE}`
};
