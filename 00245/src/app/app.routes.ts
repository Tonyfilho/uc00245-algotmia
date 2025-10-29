import { Routes } from '@angular/router';

import { Aula02 } from './pages/aula02/aula02';
import { Aula01 } from './pages/aula01/aula01';


export const routes: Routes = [
  { path: '', redirectTo: 'aula02', pathMatch: 'full' },
  { path: 'aula01', component: Aula01 },
  { path: 'aula02', component: Aula02 },
  { path: 'wellcome', loadComponent: () => import('./pages/wellcome/wellcome').then(c => c.Wellcome)},
  // { path: 'Wellcome', component: Wellcome},

  { path: '**', component: Aula01 },
];
