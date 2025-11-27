// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './client-portal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { DashboardClienteComponent } from './client-portal/dashboard-cliente/dashboard-cliente.component';
import { DashboardAdminComponent } from './client-portal/dashboard-admin/dashboard-admin.component';
import { DashboardTecnicoComponent } from './client-portal/dashboard-tecnico/dashboard-tecnico.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cliente', component: DashboardClienteComponent },
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'tecnico', component: DashboardTecnicoComponent },
  
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } // ✅ aquí redirige al inicio
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })], 
   exports: [RouterModule]}
)

export class AppRoutingModule {}

RouterModule.forRoot(routes, { 
  anchorScrolling: 'enabled', 
  scrollPositionRestoration: 'enabled' 
})
