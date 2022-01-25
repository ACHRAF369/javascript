const sequelize = require('./../../model/index')

module.exports = (req, res) => {
	return res.render('event/new', {
		title: 'New Event',
		msg: 'Create a new event',
		event: sequelize.models.Event
	})	
}
