const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const momentLocaleKeeper = require('moment-locales-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {

    mode:'development',
    entry:{
        app:path.resolve(__dirname+"/src/index.js")
    },
    output:{
      filename:'[name].bundle.js',
      path:path.resolve(__dirname,'build')
  },
    devServer:{
      contentBase: path.join(__dirname+'build'),
      compress:true,
      port:9000,
      historyApiFallback:true,
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

            template:'index.html',
            favicon: path.resolve(__dirname+'/src/components/img/favicon.ico'),

          } 
          ),
        new momentLocaleKeeper({
          localesToKeep:['es-us','ru']
        }) ,

/*         new FileManagerPlugin({
          onEnd:{
            mkdir:[
              'build/img',
            ],
            move:[
              {source:'build/furgon.jpg',destination:'build/img/furgon.jpg'},
              {source:'build/logoWernox.png',destination:'build/img/logoWernox.png'},
              {source:'build/spinner.png',destination:'build/img/spinner.png'},
              {source:'build/favicon.ico',destination:'build/img/favicon.ico'},
              {source:'build/Bigspinner.png',destination:'build/img/Bigspinner.png'},
            ]
          }          
        }) */
    ],

}


