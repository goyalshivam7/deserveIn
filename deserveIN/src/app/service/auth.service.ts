import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from "../interface/user";
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user: Observable<User>;

  constructor(public afauth: AngularFireAuth, private functions: AngularFireFunctions, private db: AngularFirestore, private router: Router) { this.user = afauth.authState }

  async createUserData(user: User) {
    const callable = this.functions.httpsCallable('createNewUser');
    try {
      const result = await callable({ uid: user.uid, photoURL: user.photoURL, displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, providerId: user.providerId }).toPromise();
      console.log(result);
    } catch (error) {
      console.error("Error", error);
    }
  }

  async login(email: string, password: string) {
    await this.afauth
       .signInWithEmailAndPassword(email, password)
       .then(value => {
         console.log('Nice, it worked!');
         this.SetUserData(value.user);
         this.router.navigate(['/']);
       })
       .catch(err => {
         console.log('Something went wrong:', err.message);
       });
   }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afauth.signInWithPopup(provider);
    return this.createUserData(credential.user);
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afauth.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      providerId: user.providerId
    }
    return userRef.set(userData, {
      merge: true
    })
  }


  async logout() {
    await this.afauth.signOut();
  }
}




