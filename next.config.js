module.exports = {
  async redirects() {
    return [
      {
        source: '/jobs',
        destination: 'http://54.255.90.11:8080/jobs',
        permanent: true,
      },
    ]
  },
}