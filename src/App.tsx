import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import SignIn from './components/SignIn'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBK7kdKrdzO85aEG0Bxh5rZv64mIGKawCc",
  authDomain: "superchatfire.firebaseapp.com",
  projectId: "superchatfire",
  storageBucket: "superchatfire.appspot.com",
  messagingSenderId: "211349948734",
  appId: "1:211349948734:web:aa0ea0cc7e8dc67f8a846f",
  measurementId: "G-WVW8090KLV"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  const [user] = useAuthState()

  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider
    auth.signInWithPopup(provider)
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut}>Sign Out</button>
  )
}

  return (
    <div className="App">
      <header className="App-header">
     
      </header>
      <section>
        {user ? <ChatRoom firestore={firestore}/> : <SignIn signInGoogle={signInGoogle}/>}
      </section>
    </div>
  );
}

export default App;
