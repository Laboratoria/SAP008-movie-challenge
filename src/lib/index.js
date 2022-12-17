import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from './export.js';

import {app} from './config-firebase.js';

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  export function loginEmailPassword(email, password) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password);
  }
  export function signInGoogle() {
    return signInWithPopup(auth, provider);
  }
  