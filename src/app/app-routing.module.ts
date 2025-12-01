import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './client-portal/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { DashboardClienteComponent } from './client-portal/dashboard-cliente/dashboard-cliente.component';
import { DashboardAdminComponent } from './client-portal/dashboard-admin/dashboard-admin.component';
import { DashboardTecnicoComponent } from './client-portal/dashboard-tecnico/dashboard-tecnico.component';

// ✅ Importa las secciones del cliente
import { AccountComponent } from './client-portal/account/account.component';
import { CitasComponent } from './client-portal/citas/citas.component';
import { HistorialComponent } from './client-portal/historial/historial.component';
import { ServiciosComponent } from './client-portal/servicios/servicios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Dashboards
  { path: 'cliente', component: DashboardClienteComponent },
  { path: 'cliente/dashboard', component: DashboardClienteComponent }, // 👈 nueva ruta explícita
  { path: 'admin', component: DashboardAdminComponent },
  { path: 'tecnico', component: DashboardTecnicoComponent },

  // Secciones del cliente
  { path: 'cliente/account', component: AccountComponent },
  { path: 'cliente/citas', component: CitasComponent },
  { path: 'cliente/historial', component: HistorialComponent },
  { path: 'cliente/servicios', component: ServiciosComponent },

  // Redirección por defecto
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
