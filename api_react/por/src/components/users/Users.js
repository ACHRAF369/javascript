import React, { Component } from 'react'

export class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users: [
        {
            "login": "mojombo",
            "id": 1,
            "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
            "html_url": "https://github.com/mojombo",
            "repos_url": "https://api.github.com/users/mojombo/repos",
           
          },{
            "login": "defunkt",
            "id": 2,
            "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
            "html_url": "https://github.com/defunkt",
            "repos_url": "https://api.github.com/users/defunkt/repos",
            
          },
          {
            "login": "pjhyett",
            "id": 3,
            "avatar_url": "https://avatars.githubusercontent.com/u/3?v=4",
            "html_url": "https://github.com/pjhyett",
            "repos_url": "https://api.github.com/users/pjhyett/repos",
          
          },
       ]
    }
  }

  render() {
    return (
      <div>
          {this.statement.users.map(user => (
              <div className="col-md-4">
                b.<div class="card">
                    <img class="card-img-top" src={user.avatar_url} alt="">
                    <div class="card-body">
                        <h4 class="card-title">{user.login}</h4>
                        <p class="card-text">
                            <a href={user.html_url} className="btn-success"></a>
                            <a href={} className=""></a>
                        </p>
                    </div>
                </div>

              </div>
          ))}
      </div>
    )
  }
}

export default Users