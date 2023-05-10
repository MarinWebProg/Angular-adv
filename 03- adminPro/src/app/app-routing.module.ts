import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** COMPONENTES */
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

const routes: Routes=[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'grafica1', component: Grafica1Component},
  {path: '',redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**',component:NoPageFoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), //El  RouterModule.forRoot(); -->para configurar las rutas principales de una aplicación, especificando qué componentes se mostrarán cuando los usuarios visiten diferentes direcciones en el sitio web.

  ],
  exports:[RouterModule],
})
export class AppRoutingModule {

}
