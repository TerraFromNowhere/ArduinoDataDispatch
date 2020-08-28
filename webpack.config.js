const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const momentLocaleKeeper = require('moment-locales-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

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
                test: /\.(png|ico|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name:"[name].[ext]"
                    }
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
              <link rel = "favicon" type = "image/x-icon" href = "/img/favicon.ico">
                <title>ArduinoDataDispatcher</title>
                  <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1"></head>
              <body style= "margin:0px;padding:0px;">
                  <div id="root"></div>
                  <script type="text/javascript" src="bundle/app.bundle.js"></script>
              </body>
            
            </html>
            `
          } 
          ),
        new momentLocaleKeeper({
          localesToKeep:['es-us','ru']
        }) ,

        new FileManagerPlugin({
          onEnd:{
            mkdir:[
              'build/img',
              'build/bundle'
            ],
            move:[
              {source:'build/furgon.jpg',destination:'build/img/furgon.jpg'},
              {source:'build/logoWernox.png',destination:'build/img/logoWernox.png'},
              {source:'build/spinner.png',destination:'build/img/spinner.png'},
              {source:'build/favicon.ico',destination:'build/img/favicon.ico'},
              {source:'build/app.bundle.js',destination:'build/bundle/app.bundle.js'}
            ]
          }          
        })
    ],

    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'build')
    }

}


