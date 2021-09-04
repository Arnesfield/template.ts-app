const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    target: 'node',
    entry: {
      index: './index.ts'
    },
    output: {
      clean: true,
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.ts', '.json'],
      mainFields: ['module', 'main'],
      modules: ['node_modules']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'common',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new ESLintPlugin({ extensions: ['js', 'ts'] }),
      new EnvironmentPlugin({ VERSION: require('./package.json').version }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerHost: 'localhost',
        analyzerMode: isProduction ? 'disabled' : 'server'
      })
    ]
  };
};
