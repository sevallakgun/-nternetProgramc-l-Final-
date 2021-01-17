import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  kullanicilar : any;


  constructor(public db : AngularFireDatabase){

   
    
  }



  ngOnInit() {
    this.kullanicilariGetir();
   
  }
 
  kullanicilariGetir() {
    this.db.list('uyeler').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(k => {
      
   
    
    
      this.kullanicilar = k;
    });
  }


  kullanciyiGuncelle  (user){
    this.db.list('uyeler').update(user.key,{admin : !user.admin})
 


  }


  deleteUser  (key){
    this.db.list('users').remove(key)
 


  }


 

  



}
