import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public firebaseService : FirebaseService ) { }

  ngOnInit() {
    
   
  }

  async cikis(){

    await this.firebaseService.cikis()
    
  }

}
