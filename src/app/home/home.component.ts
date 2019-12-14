import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //router: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.decode();
  }
  decode() {
    var kristan = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhZG1pbiIsInJvbGVzIjoiYWRtaW4iLCJuYmYiOjE1NzU2MTM5NzMsImV4cCI6MTU3NTcwMDM3MywiaWF0IjoxNTc1NjEzOTczfQ.CtpzGoT2g-wX_37VbWtTuz75T6pvsB0X_SVqKofbTGWnKP3SxRCvitU4hI55T891rRaK1G_bWC5_2DpbysFI1w";
    var payLoad = JSON.parse(window.atob(kristan.split('.')[1]));
    var userRole = payLoad.role;
    var role = payLoad.userRole;
    console.log(userRole);
    console.log(role);
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
