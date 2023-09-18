const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Adjust the proxy path as needed
    createProxyMiddleware({
      target: 'http://localhost:9002', // Replace with your backend API URL
      changeOrigin: true,
    })
  );
};
