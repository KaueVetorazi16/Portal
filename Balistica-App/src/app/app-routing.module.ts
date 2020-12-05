import { DashboardComponent } from './dashboard/dashboard.component';
import { CalibresComponent } from './calibres/calibres.component';
import { MunicoesComponent } from './municoes/municoes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArmasComponent } from './armas/armas.component';

const routes: Routes = [
  {path: 'armas', component: ArmasComponent},
  {path: 'municoes', component: MunicoesComponent},
  {path: 'calibres', component: CalibresComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
