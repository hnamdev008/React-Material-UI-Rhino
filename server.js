const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

app.use(express.static('dist/'));

app.listen(port);
console.log("server started on port " + port);
