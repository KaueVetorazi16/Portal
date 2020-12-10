import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../_services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router, 
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.toastr.show('Log Out');
    this.router.navigate(['/user/login']);
  }

  entrar(){
    this.router.navigate(['/user/login']);
  }

}
