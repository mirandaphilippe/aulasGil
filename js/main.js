/* Firebase config */
config = {
  apiKey: "AIzaSyC8pjQpOh2K_XcBhvYpk6gifzCaZ585IlI",
  authDomain: "philippe-portifolio.firebaseapp.com",
  databaseURL: "https://philippe-portifolio.firebaseio.com",
  projectId: "philippe-portifolio",
  storageBucket: "philippe-portifolio.appspot.com",
  messagingSenderId: "853016257158"
};

firebase.initializeApp(config);


  let _db =  firebase.firestore();
  let jobList = [];

  function getAllJobs() {
    _db.collection('jobs').orderBy('date', 'desc').get().then(
      (listItem) => {jobList.push(listItem)}
    ).catch(
      err => alert(err)
    )
  }
/* ----------------------*/

const render = document.getElementById('render');

