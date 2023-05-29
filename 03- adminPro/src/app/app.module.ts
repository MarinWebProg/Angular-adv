import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Modulos*/
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

/** Componentes*/
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
