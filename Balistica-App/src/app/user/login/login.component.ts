import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  model: any = {};

  constructor(public router: Router, 
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token') !== null){
      this.router.navigate(['/dashboard']);
    }
  }

  login(){
    this.authService.login(this.model)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
          this.toastr.success('Logado com sucesso!');
        },
          error => {
            this.toastr.error('Falha ao tentar logar');
          }
      )
  }

}
