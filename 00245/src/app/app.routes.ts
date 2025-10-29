import { Routes } from '@angular/router';
import { Home } from './pages/aula01/aula01';


export const routes: Routes = [
  { path: '', redirectTo: 'aula01', pathMatch: 'full' },
  { path: 'aula01', component: Home },
  { path: 'wellcome', loadComponent: () => import('./pages/wellcome/wellcome').then(c => c.Wellcome)},
  // { path: 'Wellcome', component: Wellcome},

  { path: '**', component: Home },
];
