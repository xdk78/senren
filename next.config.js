// On production, variables are set with `now secrets`. On development, they use the .env file
require('dotenv').config()

module.exports = {
  env: {
    THEMOVIEDB_API_KEY: process.env.THEMOVIEDB_API_KEY,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}
