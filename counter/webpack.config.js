module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname +'/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', 
            query: {
                presets: ['es2015','react','stage-0'],
                plugins: [
                  "transform-es2015-modules-commonjs",
                  "transform-react-constant-elements",
                  "transform-es2015-arrow-functions"
               ]
            }
        }]
    }
};