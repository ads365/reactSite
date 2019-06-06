const initState = {
  blogs: [
    {},
  ]
}﻿

const blogReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_BLOG':
      console.log("created blog post", action.blog);
      return state;
    case 'CREATE_BLOG_ERROR':
      console.log('create blog post error', action.err);
      return state;
    default:
      return state;
  }
}

 export default blogReducer
