import { ConteudoComponent } from './conteudo/conteudo.component';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalibresComponent } from './calibres/calibres.component';
import { MunicoesComponent } from './municoes/municoes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmasComponent } from './armas/armas.component';
import { ArtigosComponent } from './artigos/artigos.component';

const routes: Routes = [
  {path: 'user', component : UserComponent, 
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: RegistrationComponent}
    ]
  },
  {path: 'armas', component: ArmasComponent, canActivate: [AuthGuard]},
  {path: 'municoes', component: MunicoesComponent, canActivate: [AuthGuard]},
  {path: 'calibres', component: CalibresComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'conteudo', component: ConteudoComponent, canActivate: [AuthGuard] },
  {path: 'artigos', component: ArtigosComponent, canActivate: [AuthGuard] },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
