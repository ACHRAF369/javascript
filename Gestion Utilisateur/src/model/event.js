const { DataTypes } = require('sequelize')
const sequelize = require('./index')


const event = sequelize.define('Event',{
     name: DataTypes.STRING,
     email: DataTypes.STRING,
     password:DataTypes.STRING
})

module.exports = event

/*module.exports = (sequelize, DataTypes) =>{
     return sequelize.define('event', {
          name: DataTypes.STRING,
          description: DataTypes.TEXT
     })
}*/