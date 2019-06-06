const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello!");
});

const createNotification = (notification => {
  return admin.firestore().collection('notifications').add(notification).then(doc => console.log('notification added', doc));
})

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
  const project = doc.data();
  const notification = {
    content: 'Added A New Project',
    time: admin.firestore.FieldValue.serverTimestamp()
  }

  return createNotification(notification);
});

exports.blogCreated = functions.firestore.document('blogs/{blogId}').onCreate(doc => {
  const blog = doc.data();
  const notification = {
    content: 'Added A New Blog',
    time: admin.firestore.FieldValue.serverTimestamp()
  }

  return createNotification(notification);
});

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
    const newUser = doc.data();
    const notification = {
      content: 'Signed Up',
      user: `${newUser.firstName} ${newUser.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
  })
})
