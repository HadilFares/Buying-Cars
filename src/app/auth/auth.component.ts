import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private c:AuthService) { }

  ngOnInit(): void {
  }
   seconnecter(l,m){
     this.c.seconnecter(l,m);
   }
}
