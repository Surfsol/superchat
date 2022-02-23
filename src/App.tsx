import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import SignIn from './components/SignIn'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
// import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollectionData} from 'react-firebase-hooks/firestore'

const app = initializeApp({
  apiKey: "AIzaSyBK7kdKrdzO85aEG0Bxh5rZv64mIGKawCc",
  authDomain: "superchatfire.firebaseapp.com",
  projectId: "superchatfire",
  storageBucket: "superchatfire.appspot.com",
  messagingSenderId: "211349948734",
  appId: "1:211349948734:web:aa0ea0cc7e8dc67f8a846f",
  measurementId: "G-WVW8090KLV"
})

const auth = getAuth(app)
const db = getFirestore(app)
//const firestore = app.firestore()

function App() {
//  const [user] = useAuthState()
const authState = onAuthStateChanged(auth, user => console.log({user}))
console.log(authState())

//   const signInGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider
//     auth.signInWithPopup(provider)
// }

const getMessages =async(db:any) => {
  const collect = collection(db, 'messages')
  const docs = await getDocs(collect)
  const list = docs.docs.map(doc => doc.data())
  return list
}
getMessages(db)

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
        {/* {user ? <ChatRoom firestore={firestore} auth={auth}/> : <SignIn signInGoogle={signInGoogle}/>} */}
      </section>
    </div>
  );
}

export default App;
