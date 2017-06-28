import * as firebase from 'firebase';

export class AuthService {
  token: string = '';
  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }
  signinUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    )
      .then(response => {
        firebase.auth().currentUser.getToken().then(token => {
          this.token = token;
        });
      });
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(token => {
      this.token = token;
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  userLogout() {
    firebase.auth().signOut();
    this.token = null;
  }
}