export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make assync call to database
    //no author etc fields - as it is meant for 1 user only
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_PROJECT', project});
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err})
    })
  }
};
