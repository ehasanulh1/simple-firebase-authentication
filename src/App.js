import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/fitebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error:', error)
      })
  }

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error:', error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({})
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error:', error)
      })
  }

  return (
    <div className="App">
      {/* condition ? true: false */}
      {
        user.uid ?
          <button onClick={handleSignOut}>Sign Out</button>
          :
          <div>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
            <button onClick={handleFacebookSignIn}>Facebook sign in</button>
            <button onClick={handleGithubSignIn}>Github sign in</button>
          </div>

      }
      {
        user.uid && <div>
          <h2>User Name: {user.displayName}</h2>
          <h3>Email Address: {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
