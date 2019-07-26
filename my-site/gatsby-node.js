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

  const jsxRule = config.module.rules.find(
    rule => String(rule.test) === String(/\.jsx?$/)
  )
  // transpile node_modules/common but nothing else in node_modules
  jsxRule.exclude = /node_modules\/(?!(common)\/).*/

  console.log("new rules", config.module.rules)

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}
