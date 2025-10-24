import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'wellcome', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'Wellcome', loadComponent: () => import('./pages/wellcome/wellcome').then(c => c.Wellcome)},

  { path: '**', component: Home },
];
