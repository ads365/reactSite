import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

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
    this.props.signUp(this.state);
  }

  render() {
    //if loged in route to dashboard
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/dashboard' />

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

            <div>
              { authError ? <p>{ authError }</p> : null }
            </div>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
