"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBeers = void 0;
var mysql = require('mysql');
var dotenv = require('dotenv').config();
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'sigbbe_craftql_datab',
});
var BEER_NAMES = "SELECT Name FROM Beer;";
var BEER = "SELECT BeerID, Beer.Name, Type.Name, Volume, Brand.Name FROM Beer join Type on Beer.Type=Type.TypeID JOIN Brand ON Beer.Brand=Brand.BrandID;";
var getBeers = function () { return connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    var res = connection.query(BEER, function (connErr, results, fields) {
        if (connErr) {
            console.log(connErr.message);
        }
        return { results: results, fields: fields };
    });
    connection.end(function (endErr) {
        if (endErr) {
            return console.log(endErr.message);
        }
    });
    return res.results;
}); };
exports.getBeers = getBeers;
