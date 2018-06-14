
const path = require('path');



module.exports = {
    entry: {
        //editor: './static/components/jsx/Editor.jsx',
        //home: './static/components/jsx/Home.jsx',
        //projectAdder: './static/components/jsx/Project-Adder.jsx',
        essays: './static/components/jsx/Essays.jsx'
    },
    output: {
        path: path.resolve(__dirname, './static/bundles'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
      }
}