
var firebaseConfig = {
    apiKey: "AIzaSyDoPKBW4OfJKDpeutJr7qpv99_0NkLTO7M",
    authDomain: "carclub-registration.firebaseapp.com",
    databaseURL: "https://carclub-registration.firebaseio.com",
    projectId: "carclub-registration",
    storageBucket: "carclub-registration.appspot.com",
    messagingSenderId: "977533332385",
    appId: "1:977533332385:web:89a9f5b1a52f7397f039e0",
    measurementId: "G-W55EY12D7E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function signIn() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // console.log(email);
    // console.log(password);
    

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                // console.log(JSON.stringify(user));
                
              window.location = '1homepage.html'; //After successful login, user will be redirected to home.html
            }
          });
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // console.log(errorCode);
        // console.log(errorMessage);
        document.getElementById('errorpanel').innerHTML = errorMessage;
        return;
        
    });

   
}

function signUp() {
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // console.log(email);
    // console.log(password);
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // console.log(errorCode);
        // console.log(errorMessage);
        return;
      }); 

      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = '1homepage.html'; //After successful login, user will be redirected to home.html
        }
      });
}

function signOut(pathsuffix = '') {
    firebase.auth().signOut();
    // console.log("Signedout");
    window.location.href = 'https://samcodee.github.io/infopedia/signup-login.html';
    
}

function checkUser(pathsuffix ='') {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            // console.log(JSON.stringify(user));
            
          //window.location = '1homepage.html'; //After successful login, user will be redirected to home.html
        }
       else {
         window.location.href = 'https://samcodee.github.io/infopedia/signup-login.html';
        }
    });
}