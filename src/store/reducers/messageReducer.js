const initState = {
  messages: [
    {},
  ]
}﻿

const messageReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_MESSAGE':
      console.log("created message", action.message);
      return state;
    case 'CREATE_MESSAGE_ERROR':
      console.log('create blog post error', action.err);
      return state;
    default:
      return state;
  }
}

 export default messageReducer
