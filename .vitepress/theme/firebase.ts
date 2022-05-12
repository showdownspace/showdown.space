import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyC2K76ycMyLhAYOd_XOa3aC3Cnqe6dEno0',
  authDomain: 'showdownspace.firebaseapp.com',
  databaseURL:
    'https://showdownspace-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'showdownspace',
  storageBucket: 'showdownspace.appspot.com',
  messagingSenderId: '999073329546',
  appId: '1:999073329546:web:d4491bf91f07d266a49873',
  measurementId: 'G-CKBX8QJJJM',
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
