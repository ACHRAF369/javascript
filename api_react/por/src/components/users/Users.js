import React, { Component } from 'react'
import User from './User'
import SearchUsers from './SearchUsers'
import axios from 'axios'

export class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    }
  }

getUsers =() =>{
  axios.get('https://api.github.com/users')
       .then( Respense =>{
          this.setState({
             users: Respense.data
          })
       })
}

componentDidMount() {
    this.getUsers();
}
searchUsersFromGit = (data) => {
        if(data!= ''){
          axios.get(` https://api.github.com/search/users?q=${data}`)
          .then(respense => {
            this.setState({
              users: respense.data.items
            })
          })
        }
}
  render() {
    return (
      <div >
        <div className="row my-2">
          <div className="col-md-12">
               <SearchUsers  getUserSearch={this.searchUsersFromGit} />
          </div>
        </div>
        <div class="row">
          {this.state.users.map(user => (
              <div className="col-md-4" key={user.id} >
                <User user={user} />
              </div>
          ))}
          </div>
      </div>
    )
  }
}

export default Users