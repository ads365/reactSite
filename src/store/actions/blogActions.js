export const createBlog = (blog) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make assync call to database
    //no author etc fields - as it is meant for 1 user only
    const firestore = getFirestore();
    firestore.collection('blogs').add({
      ...blog,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_BLOG', blog});
    }).catch((err) => {
      dispatch({ type: 'CREATE_BLOG_ERROR', err})
    })
  }
};
