import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/** COMPONENTES */
/** PAGINA NO ENCONTRADO 404*/
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

/** Modulo de rutas (rutas hijas)*/
import { pagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes=[
 //Es la ruta donde estaran las rutas protegidas

  // path '/dashboard' -> pagesRoutingModule
  // path '/auth' -> AuthRoutingModule
  {path: '**',component:NoPageFoundComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes), //El  RouterModule.forRoot(); -->para configurar las rutas principales de una aplicación, especificando qué componentes se mostrarán cuando los usuarios visiten diferentes direcciones en el sitio web.
    pagesRoutingModule,
    AuthRoutingModule,
  ],
  exports:[RouterModule],
})
export class AppRoutingModule {

}
