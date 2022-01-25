const sequelize = require('./../../model/index')
const Event = require('./../../model/event')

module.exports = (req, res) =>{
     Event
          .create(req.body)
          .then(()=>res.redirect('/events'))


}