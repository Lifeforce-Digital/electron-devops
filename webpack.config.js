const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
        target: 'electron-renderer',
        entry: './src/renderer/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
        },
        module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/react']
                        }
                    },
                    {
                        test: /\.css$/i,
                        use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]?[hash]'
                        }
                    }
                ]
        },
      plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }
};
