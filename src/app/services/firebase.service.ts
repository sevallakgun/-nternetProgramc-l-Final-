import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService  {

  users : any;
  isLoggedIn = false

  constructor(public firebaseAuth:AngularFireAuth, public router: Router,public db : AngularFireDatabase) { }
  async giris(email:string , sifre :string ){

    await this.firebaseAuth.signInWithEmailAndPassword(email,sifre)
    .then((res)=>{

      this.isLoggedIn = true
      
     this.kullanicilariGetir(res.user)
     
      
      
     
    })
  }

  cikis(){
    this.firebaseAuth.signOut()
    localStorage.removeItem("user")
    this.router.navigate(["/signin"])
  }

 
  kullanicilariGetir(user) {
    this.db.list('users').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(users => {
     
      let find:any = users.find((item :any)=> item.uid === user.uid)

      if(find.admin)
      {
        this.router.navigate(["/home"])
        localStorage.setItem('user',JSON.stringify(user))
      }
        
       
    });
  }
}
