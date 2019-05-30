import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="sign-in">
        <h4>Sign In</h4>

        <div>
          <form onSubmit={this.handleSubmit}>

            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address.."
              onChange={this.handleChange}/>

            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              onChange={this.handleChange}/>

            <button>Log In</button>

          </form>
        </div>
      </div>
    )
  }
}

export default SignIn
