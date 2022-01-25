const { Sequelize, DataTypes, Model, SequelizeScopeError} = require('sequelize')

//const sequelize = new Sequelize('mysql://root:123456@localhost:3306/sequelize')
const sequelize = new Sequelize('seque','root','', {
	host: 'localhost',
	dialect: 'mysql'
})
sequelize
	.authenticate()
	.then(() => console.log('OK!'))
	.catch(() => console.log('ERROR!'))

sequelize.sync()
//sequelize.sync({force: true})

module.exports = sequelize
     