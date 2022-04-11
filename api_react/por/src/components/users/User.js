import React, { Component } from 'react'
export class User extends Component {
    render() {

        console.log(this.props.user);
        const { login, avatar_url, html_url, repos_url } = this.props.user;
        return (
            <div>
                <div className="card">
                    <img src={avatar_url} alt="" className="card-img-top" />

                    {/* <img className="card-img-top" src={avatar_url} alt="" /> */}

                    <div className="card-body">

                        <h4 className="card-title">{login}</h4>

                        <p className="card-text">

                            <a href={html_url} className="btn btn-success">Show more</a>
                            <a href={repos_url} className="btn btn-warning">Repositories</a>

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default User