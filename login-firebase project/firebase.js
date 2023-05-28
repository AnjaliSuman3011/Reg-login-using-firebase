const firebaseConfig = {
  // Your Firebase config 
  
  apiKey: "AIzaSyDDRaasziBNOHH-ct0-52T73pJkMd4957M",
  authDomain: "reg-page-7d155.firebaseapp.com",
  databaseURL: "https://reg-page-7d155-default-rtdb.firebaseio.com",
  projectId: "reg-page-7d155",
  storageBucket: "reg-page-7d155.appspot.com",
  messagingSenderId: "29358297692",
  appId: "1:29358297692:web:bd322dbeb4cf99453b4c99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Rest of your Firebase code (authentication, database, etc.) goes here

// Function to register a user
function UserRegister() {
  var email = document.getElementById("eemail").value;
  var password = document.getElementById("lpassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Registration successful
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle registration error
    });
}

// Function to sign in a user
function SignIn() {
  var email = document.getElementById("eemail2").value;
  var password = document.getElementById("lpassword2").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      // Sign-in successful
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle sign-in error
    });
}

// Other Firebase-related functions and code
