const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const momentLocaleKeeper = require('moment-locales-webpack-plugin');

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
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              }
        ]},

    
    plugins:[
        new HtmlWebpackPlugin(
            {
            inject: false,
            favicon: path.resolve(__dirname+'/src/components/img/favicon.ico'),
            templateContent: () => `
            <html>

            <head>
            <link rel = "favicon" type = "image/x-icon" href = "favicon.ico">
              <title>ArduinoDataDispatcher</title>
                <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1"></head>
            <body style= "margin:0px;padding:0px;background-image:url('../src/components/img/furgon.jpg');background-position:center;">
                <div id="root"></div>
                <script type="text/javascript" src="app.bundle.js"></script>
            </body>
            
            </html>
            `
          } 
          ),
        new momentLocaleKeeper({
          localesToKeep:['es-us','ru']
        })
    ],

    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'build')
    }

}


