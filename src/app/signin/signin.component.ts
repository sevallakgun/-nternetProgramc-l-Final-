import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isSignedIn = false
  constructor(public firebaseService : FirebaseService ) { }

  ngOnInit() {

  }
  async giris(email:string,sifre:string){

    await this.firebaseService.giris(email,sifre)
    
  }

}
