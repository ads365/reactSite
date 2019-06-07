import React, { Component } from 'react';
import { createMessage } from '../../store/actions/messageActions';
import { connect } from 'react-redux';

class ContactMe extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMessage(this.state)
    this.props.history.push('/');
  }

  render() {

    return (
      <div className="sign-in">
        <h4>Contact Me</h4>

        <div>
          <form onSubmit={this.handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name.."
              onChange={this.handleChange}/>

            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email Address.."
              onChange={this.handleChange}/>

            <label>Message</label>
            <textarea
              type="text"
              id="message"
              rows={5}
              placeholder="Your Message.."
              onChange={this.handleChange}/>

            <button>Send</button>

          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(ContactMe)
