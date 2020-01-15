# tampermonkey-webpack-template

This is a template for the [webpack](http://webpack.github.io/) plugin [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin).
Its usful for you to develop tampermonkey userscripts.

**Oh, pls use cdn.**

Templates for the html-webpack-plugin are implemented using [underscore templates](http://underscorejs.org/#template)
(previously, in 2.x, [blueimp templates](https://github.com/blueimp/JavaScript-Templates)). You can write your own as
well.

## Installation

Install the template in your project with npm:

```shell
$ npm install tampermonkey-webpack-template --save-dev
```

## Basic Usage

To make it work, you need to provide these **required parameters**:

- `inject: false`
- `template: require('tampermonkey-webpack-template')`

And you can provide some other *optional parameters*:
- `scriptName`: The name of your tampermonkey script.
- `namespace`: Same as namespace field in tampermonkey script.
- `version`: Same as version field in tampermonkey script.
- `description`: Same as description field in tampermonkey script.
- `author`: Same as author field in tampermonkey script.
- `include`: Same as include field in tampermonkey script.
- `exclude`: Same as exclude field in tampermonkey script.
- `match`: Same as match field in tampermonkey script.

otherwise available.

### Example

Here's an example webpack config illustrating how to use these options in your `webpack.config.js`:

```js
const packageJson = require('./package.json')
{
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('tampermonkey-webpack-template'),
      // template: 'node_modules/tampermonkey-webpack-template/index.ejs',

      // Optional
      scriptName: packageJson.name,
      namespace: packageJson.namespace,
      description: packageJson.description,
      version: packageJson.version,
      include: '/.*\\/github/.*/',
      exclude: '/.*\\/github/.*/',
      match: '/.*\\/github/.*/'
    })
  ]
}
```
