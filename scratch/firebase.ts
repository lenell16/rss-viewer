import { readFileSync } from 'fs';
import * as firebase from 'firebase-admin';

const serviceAccount = JSON.parse(
  readFileSync(
    '/Users/althomas/.firebase/better-one-tab-firebase-adminsdk-mvpad-1d76da8b4e.json',
    'utf8'
  )
);

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://better-one-tab.firebaseio.com'
});

export default firebase;
