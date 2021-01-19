const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/react/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],

    },
    resolve: {
        extensions: ["*", ".js", ".jsx", '.ts', '.tsx'],
        alias: {
                '@': path.resolve('src'),
}
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "./src/react/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.DefinePlugin({'process.env.REACT_APP_SOURCE': JSON.stringify(process.env.REACT_APP_SOURCE)
    })]
};
