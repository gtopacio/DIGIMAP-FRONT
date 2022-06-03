module.exports = {
  async redirects() {
    return [
      {
        source: '/jobs',
        destination: 'http://localhost:8080/jobs',
        permanent: true,
      },
    ]
  },
}