const { createProxyMiddleware } = require("http-proxy-middleware");

// membuat proxy dengan route backend /penyewa
module.exports = function (app) {
    app.use(
      "/penyewa",
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
      })
    );
};


// membuat proxy dengan route backend /kost
module.exports = function (app) {
  app.use(
    "/kost",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};