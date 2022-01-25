const sequelize = require('./../../model/index')
const Event = require('./../../model/event')

module.exports = (req, res) =>{
     Event
          .findByPk(req.params.id)
          .then((event)=>{
               return res.render('event/show',{
                    title: 'Event - ' + event.name,
                    msg: 'Show - ' + event.name,
                    event
               })
          })
}
