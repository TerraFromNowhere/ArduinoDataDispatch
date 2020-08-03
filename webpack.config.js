const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode:'development',

    entry:{
        app:path.resolve(__dirname+"/src/index.js")
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    
    plugins:[
        new HtmlWebpackPlugin(
            {
            inject: false,
            templateContent: () => `
            <html>

            <head>
              <meta charset="utf-8">
              <title>ArduinoDataDispatcher</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></head>
            <body>
                <div id="root"></div>
                <script type="text/javascript" src="app.bundle.js"></script>
            </body>
            
            </html>
            `
          } 
          )
    ],

    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'build')
    }

}


