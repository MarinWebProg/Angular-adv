import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** COMPONENTES */
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

/** PAGINA NO ENCONTRADO 404*/
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

/** Modulo de rutas (rutas hijas)*/
import { pagesRoutingModule } from './pages/pages.routing';

const routes: Routes=[
 //Es la ruta donde estaran las rutas protegidas

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: '**',component:NoPageFoundComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes), //El  RouterModule.forRoot(); -->para configurar las rutas principales de una aplicación, especificando qué componentes se mostrarán cuando los usuarios visiten diferentes direcciones en el sitio web.
    pagesRoutingModule,
  ],
  exports:[RouterModule],
})
export class AppRoutingModule {

}
