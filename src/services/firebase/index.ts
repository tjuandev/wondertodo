import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAMVgweR-JgQGHIq7tt92hUKS8wHV3to18',
  authDomain: 'wondertodo-b2183.firebaseapp.com',
  projectId: 'wondertodo-b2183',
  storageBucket: 'wondertodo-b2183.appspot.com',
  messagingSenderId: '1051903319170',
  appId: '1:1051903319170:web:e1b6595f29174ab4f1689b',
  measurementId: 'G-5P4G5JDH3Q'
}

const app = initializeApp(config)
const db = getFirestore(app)

export { db }
