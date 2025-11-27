import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Interceptor versión Instalada
import { AuthTokenInterceptor } from './auth/auth.interceptor';

// Guard
//
// Componentes de autenticación
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Componentes cliente
import { DashboardComponent } from './client-portal/dashboard/dashboard.component';
import { CitasComponent } from './client-portal/citas/citas.component';
import { ServiciosComponent } from './client-portal/servicios/servicios.component';
import { HistorialComponent } from './client-portal/historial/historial.component';
import { AccountComponent } from './client-portal/account/account.component';
import { DetalleServicioComponent } from './client-portal/historial/detalle-servicio/detalle-servicio.component';
import { InicioComponent } from './client-portal/inicio/inicio.component';

// Admin
import { AdminCitasComponent } from './client-portal/dashboard-admin/admin-citas/admin-citas.component';
import { DashboardAdminComponent } from './client-portal/dashboard-admin/dashboard-admin.component';
import { DashboardClienteComponent } from './client-portal/dashboard-cliente/dashboard-cliente.component';
import { DashboardTecnicoComponent } from './client-portal/dashboard-tecnico/dashboard-tecnico.component';

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  CitasComponent,
  ServiciosComponent,
  HistorialComponent,
  AccountComponent,
  DetalleServicioComponent,
  InicioComponent,
  AdminCitasComponent,
  DashboardAdminComponent,      
  DashboardClienteComponent,  
  DashboardTecnicoComponent
],
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule // 👈 aquí sí va, pero en imports
]
,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor, // ← la versión correcta
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
