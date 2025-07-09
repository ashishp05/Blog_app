const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
  return {
      env: {
      DATABASE_URL: "mongodb+srv://patelashish2218:3eVZOEOH5ohPobYX@cluster0.u0fqxy4.mongodb.net/blog_app_dev"
    }
}
  }

  return {
    env: {
      DATABASE_URL: "mongodb+srv://patelashish2218:3eVZOEOH5ohPobYX@cluster0.u0fqxy4.mongodb.net/blog_app_pro"
    }
  }


};
