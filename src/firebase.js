import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"

const firebaseConfig = {
  apiKey: "AIzaSyDr8cWgzwKYw09bT85CdI4eujt9y66Gcj8",
  authDomain: "ssd-yogashala.firebaseapp.com",
  projectId: "ssd-yogashala",
  storageBucket: "ssd-yogashala.firebasestorage.app",
  messagingSenderId: "811438553490",
  appId: "1:811438553490:web:a6f9e937b826679758294b"
}

const app = initializeApp(firebaseConfig)

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ld08XktAAAAAGR6ndDwKjE12kw-wTsOVq91qoO4"),
  isTokenAutoRefreshEnabled: true,
})

export const db = getFirestore(app)
