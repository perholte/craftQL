import { Connection } from 'mysql'
import Sequelize from 'sequelize'
import { defineBeer } from './models/Beer'
import { defineBrand } from './models/Brand'
import { defineReview } from './models/Review'
import { defineType } from './models/Type'

let mysql = require('mysql')
const dotenv = require('dotenv').config()

let connection: Connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'sigbbe_craftql_datab',
})


defineBeer(connection, Sequelize)
defineReview(connection, Sequelize)
defineBrand(connection, Sequelize)
defineType(connection, Sequelize)

export default connection
