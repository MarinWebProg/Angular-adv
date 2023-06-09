import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Modulos*/
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

/** Componentes*/
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
