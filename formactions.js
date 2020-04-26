
  // Your web app's Firebase configuration
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
  firebase.analytics();

  const auth = firebase.auth()

  function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
   }
   
   
   
   function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
    
    
   }
   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
   }
   
   
   
   auth.onAuthStateChanged(function(user){
    
    if(user){
     
     var email = user.email;
     alert("Active User " + email);
     
     //Take user to a different or home page
  
     //is signed in
     
    }else{
     
     alert("No Active User");
     //no user is signed in
    }
    
    
    
   });
