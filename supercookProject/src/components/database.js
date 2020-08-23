import * as Firebase from 'firebase'

let HAS_INITIALIZED = false

const initFirebase = () => {
    if (!HAS_INITIALIZED) {
        const config = {
            apiKey: "AIzaSyDaykMmct-62lsl4FV09j6Fb6ub9cAHs2U",
            authDomain: "dolapta-ne-var-15071.firebaseapp.com",
            databaseURL: "https://dolapta-ne-var-15071.firebaseio.com",
            projectId: "dolapta-ne-var-15071",
            storageBucket: "dolapta-ne-var-15071.appspot.com",
            messagingSenderId: "901693339700",
            appId: "1:901693339700:web:82b470053687163dbdf261",
            measurementId: "G-NBV7B52ECR"
        }

        Firebase.database.enableLogging(true)
        Firebase.initializeApp(config)
        HAS_INITIALIZED = true
    }
}

export const getDatabase = () => {
    initFirebase()
    return Firebase.database()
}