module.exports = [
  {
    context: '/auth',
    target: 'http://localhost:3000/auth',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  },
  {
    context: '/api',
    target: 'http://localhost:3000/api',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  }
];