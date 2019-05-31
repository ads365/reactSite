import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'

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
    this.props.signIn(this.state);
  }

  render() {

    const {authError} =  this.props;
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

            <div>
              { authError ? <p>{authError}</p> : null }
            </div>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
