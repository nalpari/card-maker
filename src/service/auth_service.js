import firebase from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvide`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
};

export default AuthService;