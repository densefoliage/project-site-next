module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test:  /\.mdx$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
    return config
  },
  trailingSlash: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}
