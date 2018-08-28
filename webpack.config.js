const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
const typescript = require('typescript');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const jsonServer = require('json-server');
const https = require('https');

const rules = [
  //{ test: /\.html$/, loader: 'html-loader' },
  /*{
    test: /\.ts$/,
    loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
    use: [
      { loader: 'awesome-typescript-loader', options: { emitError: false, failonError: false } },
      //{ loader: 'angular2-template-loader', options: { emitError: false, failonError: false } },
    ],
  },*/
  {
    test: /\.html$/,
    use: [ {
      loader: 'html-loader',
      options: {
        minimize: false
      }
    }],
  },
  {
    test: /\.sol/,
    loader: 'truffle-solidity'
  },
  { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
  { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' },
];

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => module.context && /node_modules/.test(module.context),
  })
];

if (process.env.NODE_ENV === 'production') {
  rules.push({
    test: /\.ts$/,
    loaders: ['@ngtools/webpack'],
  });
  plugins.push(
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: 'src/app/app.module#AppModule',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
      },
      compress: {
        unused: true,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
        screw_ie8: true,
        warnings: false,
      },
      comments: false,
    })
  );
} else {
  rules.push({
    test: /\.ts$/,
    loaders: [
      'awesome-typescript-loader',
      'angular-router-loader',
      'angular2-template-loader',
    ],
  });
  plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './notfound')
    )
  );
}

module.exports = {
  cache: true,
  context: __dirname,
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    stats: {
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      errors: true,
      errorDetails: false,
      hash: false,
      timings: false,
      modules: false,
      warnings: false,
    },
    publicPath: '/dist/',
    port: 3000,
    allowedHosts: [],
    setup: function(app) {
      //app.use('/api', jsonServer.router('db.json'));
    },
  },
  devtool: 'sourcemap',
  entry: {
    app: ['zone.js/dist/zone', './src/main.ts', './polyfills.ts'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js',
    publicPath: '/dist/',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: false,
    setImmediate: false,
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
  },
  plugins,
};
