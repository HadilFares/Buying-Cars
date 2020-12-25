import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  connecte =false;
  seconnecter (login,mdp){
    if(login=="admin"&&mdp=="admin")
    {
      this.connecte=true;
      this.router.navigate(['/admin']);
    }
    else alert ("password")
  }
}   
