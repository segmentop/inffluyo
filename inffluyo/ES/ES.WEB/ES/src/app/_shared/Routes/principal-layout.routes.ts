import { Routes } from "@angular/router";

export const PrincipalLayoutRoutes: Routes = [
    {
        path: "",
        loadChildren: () => import('../../_pages/home/home.module').then(m => m.HomeModule)
    }
]