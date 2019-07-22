/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const systemPath = require("path")

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  // Ensure that our babelrc settings will be applied to node_modules/common
  config.resolve.symlinks = false

  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.jsx?$/)
    ),
    {
      ...loaders.js(),
      test: /\.js$/,

      // Exclude all node_modules from transpilation, except for 'common'
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/(common)/.test(modulePath),
    },
  ]

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}
