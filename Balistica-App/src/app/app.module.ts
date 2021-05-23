import { AuthInterceptor } from './auth/auth.interceptor';

import { ArmaService } from './_services/arma.service';
import { CalibreService } from './_services/calibre.service';




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TituloComponent } from './_shared/titulo/titulo.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ArtigosComponent } from './artigos/artigos.component';


@NgModule({
  declarations: [				
    AppComponent,
      ArmasComponent,
      NavComponent,
      DashboardComponent,
      CalibresComponent,
      MunicoesComponent,
      TituloComponent,
      UserComponent,
      RegistrationComponent,
      LoginComponent,
      ConteudoComponent,
      ArtigosComponent
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
  providers: [
    ArmaService,
    CalibreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
