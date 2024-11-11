const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./docs",
  css: {
    extract: false
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/pub-guide/" : "/",
});
