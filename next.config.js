module.exports = {
  async redirects() {
    return [
      {
        source: '/jobs',
        destination: 'https://digimap-preprocess.herokuapp.com/jobs',
        permanent: true,
      },
    ]
  },
}