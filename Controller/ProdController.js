var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();



conn.connect().then(function () {
    console.log("connected to db")
})


