module.exports = {
    entry: [
        './src/App.js'
    ],
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude:/node_modulus/,
            loader: 'babel'
        }]
    }
};
