export const createMessage = (message) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //make assync call to database
    //no author etc fields - as it is meant for 1 user only
    const firestore = getFirestore();
    firestore.collection('messages').add({
      ...message,
      submittedAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_MESSAGE', message});
    }).catch((err) => {
      dispatch({ type: 'CREATE_MESSAGE_ERROR', err})
    })
  }
};
