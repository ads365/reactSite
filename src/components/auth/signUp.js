import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    fistName: '',
    lastName: ''
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
        <h4>Sign Up</h4>

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

            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Your first name.."
              onChange={this.handleChange}/>

              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Your last name.."
                onChange={this.handleChange}/>

            <button>Sign Up</button>

          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
