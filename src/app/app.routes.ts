import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./public/public.page').then((m) => m.PublicPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'registro-encuesta/:select',
    loadComponent: () => import('./encuesta-page/registro-encuesta/registro-encuesta.page').then( m => m.RegistroEncuestaPage)
  },
  {
    path: 'update-encuesta/:select',
    loadComponent: () => import('./encuesta-page/update-encuesta/update-encuesta.page').then( m => m.UpdateEncuestaPage)
  },
  {
    path: 'gestion-encuesta/:select',
    loadComponent: () => import('./encuesta-page/gestion-encuesta/gestion-encuesta.page').then( m => m.GestionEncuestaPage)
  }
];
