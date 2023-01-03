/*
-----------------------------
    INITIAL SETUP
-----------------------------
1. visit: console.firebase.google.com 
2. create a new firebase project
3. visit doc ( go to docs ): Build > Authentication > web > get started
4. Register web app: firebase project home > click web icon ( </> ) give name and register
5. Install firebase for your project:  npm install firebase 
6. DANGEROUS: ger firebase config and put it in firebase.init.js 
7. export app from firebase.init.js
-------------------------------
    SETUP THE PROVIDER
-------------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js 
9. create a google auth provider. do not forget to use "new"
10. go to firebase > Build > Authentication > Sign-in method
11. Enable google sign in method
12. create a button for google sign in method with a click handler
13. inside the event handler, call signInWithPopup with auth, provider
14. after signInWithPopup .then result , error
---------------------------------
    DISPLAY DATA
---------------------------------


---------------------------------
    ADD A NEW SIGN IN METHOD
---------------------------------
1. enable the sign in method
2. create github, twitter, fb, etc. app create
3. get clientID and secret

*/
