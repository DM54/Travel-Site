const path = require('path');
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]
module.exports={
	entry: {
      App: "./app/assets/scripts/App.js",
     // Vendor: "./app/assets/scripts/Vendor.js"
  },
  output:{
    filename:'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    before: function(app, server){
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
   mode: 'development',
   
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options:{plugins: postCSSPlugins }}]
       }
     ]
   }
	/*output: {
		path: path.resolve(__dirname, "./app/temp/scripts" ),
		filename: "[name].js"
	},*/
	/*module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}*/
}