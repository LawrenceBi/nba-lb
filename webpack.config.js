const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader",],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  browsers: ["last 5 version"]
                })
              ]
            }
          },
          // javascriptEnabled: true  ------  在less里面可以使用JavaScript表达式
          { loader: "less-loader", options: { javascriptEnabled: true } },
        ],
        // 切记这个地方一定要引入antd，文档上没有写入但是一定要因引进去，切记切记
        include: [/antd/],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")({
                  browsers: ["last 5 version"]
                })
              ]
            }
          },
          { loader: "less-loader", options: { javascriptEnabled: true } },
        ],
        exclude: [/antd/],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 1000, // size <= 1KB
              publicPath: "static/",
              outputPath: "static/"
            }
          },
          // img-loader for zip img
          /*{
            loader: "img-loader",
            options: {
              plugins: [
                require("imagemin-pngquant")({
                  quality: "80" // the quality of zip
                })
              ]
            }
          }*/
          {
            loader: "image-webpack-loader"
            
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};