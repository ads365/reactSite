import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state)
    this.props.createProject(this.state)
  }

  render() {

    //check i flogged in if not redirect to home else proceeed - state obtained from props
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div className='add-project'>
        <h4>Add Project</h4>

        <div>
          <form onSubmit={this.handleSubmit}>

            <label>Title</label>
            <input
              type="text"
              id="title"
              placeholder="The title of your project"
              onChange={this.handleChange}/>

            <label>Content</label>
            <textarea
              type="text"
              id="content"
              placeholder="The summary of your project"
              onChange={this.handleChange}>
            </textarea>

            <button>Submit</button>

          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
