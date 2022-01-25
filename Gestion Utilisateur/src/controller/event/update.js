const sequelize = require('./../../model/index')
const Event = require('./../../model/event')

module.exports = (req, res) =>{
     Event
          .update(req.body, {where: {id : req.params.id}})
          .then(() => res.redirect('/events'))
}