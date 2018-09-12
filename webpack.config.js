var webpack = require('webpack');
var config = {
    "entry": {
        "index": "./src/App.jsx",
        "vendor": [
            "react",
            "react-dom"
        ]
    },
    "resolve": {
         "extensions": ["","js"]//当requrie的模块找不到时，添加这些后缀
    },
    "output": {
        "path": "./build",
        "filename": "js/[name].js"
    },
    "watch": true,
    "module": {
        loaders: [{
            test: /\.js|.jsx$/,
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "js/bundle.js")
    ]
};


module.exports = config;
