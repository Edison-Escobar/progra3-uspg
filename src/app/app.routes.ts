import { Routes } from '@angular/router';
import { Tareas } from './tareas/tareas';

export const routes: Routes = [
    { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: Tareas }
];
