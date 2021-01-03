import { Injectable } from '@angular/core';
import { User } from "../interface/user";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user: Observable<User>;

  constructor(
    private functions: AngularFireFunctions,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.user = afAuth.authState;
  }

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
    await this.afAuth
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

   async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['/']);
    return this.SetUserData(credential.user);
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
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
    this.afAuth.signOut();
  }
}




