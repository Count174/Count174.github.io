const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const merge = require('webpack-merge');

const smartMerge = merge.smartStrategy({ 'moudle.rules.use': 'prepend'})

module.exports = (env, { mode }) => {
if (mode == 'production') {
return smartMerge(baseConfig, prodConfig)
}
 
return smartMerge(baseConfig, devConfig)
};

const baseConfig = {

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        {
          test: /\.html$/,
          use: [ { loader: "html-loader" 
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'less-loader'
          ],
        }
      ]
        },
        plugins: [
          new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
          })
        ],
        [
        new MiniCssExtractPlugin(),
        ]
      },

      const devConfig = {
        module: {
          rules: [
            {
              test: /\.less$/,
              use: ['style-loader' ]
            }
          ]
        }
      }
    ]
  }
}
};
