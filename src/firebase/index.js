import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCENUuBI7jou0VdKFfj9hEU8sNd58q6ZeQ',
  authDomain: 'simple-vue-posting-app.firebaseapp.com',
  projectId: 'simple-vue-posting-app',
  storageBucket: 'simple-vue-posting-app.appspot.com',
  messagingSenderId: '20654533824',
  appId: '1:20654533824:web:bb656ef67818b45ab25125'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

export { db, auth }
