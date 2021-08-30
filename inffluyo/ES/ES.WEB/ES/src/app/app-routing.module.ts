import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './_shared/Layouts/principal/principal.component';
import { PrincipalLayoutRoutes } from './_shared/Routes/principal-layout.routes';

const routes: Routes = [
  { path: '', component: PrincipalComponent, children: PrincipalLayoutRoutes }
];

export const Routing = RouterModule.forRoot(routes,
  {
    onSameUrlNavigation: 'reload', enableTracing: false
  }
);
