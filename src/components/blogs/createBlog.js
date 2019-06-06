import React, { Component } from 'react';
import { createBlog } from '../../store/actions/blogActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateBlog extends Component {
  state = {
    title: '',
    summary: '',
    content:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createBlog(this.state)
    this.props.history.push('/dashboard');
  }

  render() {

    //check if logged in if not redirect to home else proceeed - state obtained from props
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div className='add-blog'>
        <h4>Add Blog</h4>

        <div>
          <form onSubmit={this.handleSubmit}>

            <label>Title</label>
            <input
              type="text"
              id="title"
              placeholder="The title of your blog"
              onChange={this.handleChange}/>

            <label>Summary</label>
            <textarea
              type="text"
              id="summary"
              placeholder="The summary of your blog"
              onChange={this.handleChange}>
            </textarea>

            <label>Content</label>
            <textarea
              rows={25}
              type="text"
              id="content"
              placeholder="The content of your blog post"
              onChange={this.handleChange}>
            </textarea>

            <button>Submit</button>
          </form>
          <div>
            <h6>NOTE: Content must be in HTML... currently</h6>
          </div>
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
    createBlog: (blog) => dispatch(createBlog(blog))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
