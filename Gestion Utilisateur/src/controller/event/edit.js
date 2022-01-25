const sequelize = require('./../../model/index')
const Event = require('./../../model/event')

module.exports = (req, res) =>{
     Event
          .findByPk(req.params.id)
          .then((event) =>{
               return res.render('event/edit',{
                    title: 'Edit - ' + event.name,
                    msg: 'Editing - ' + event.name,
                    event
               })
          })
}