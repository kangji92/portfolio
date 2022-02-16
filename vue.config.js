module.exports = {
  devServer: {
    overlay: false,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  //publicPath: "/portfolio/",
  outputDir: "docs",
};
