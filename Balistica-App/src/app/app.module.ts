import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ArmasComponent } from './armas/armas.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalibresComponent } from './calibres/calibres.component';
import { MunicoesComponent } from './municoes/municoes.component';
import { TituloComponent } from './_shared/titulo/titulo.component'

@NgModule({
  declarations: [
    AppComponent,
      ArmasComponent,
      NavComponent,
      DashboardComponent,
      CalibresComponent,
      MunicoesComponent,
      TituloComponent
   ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
