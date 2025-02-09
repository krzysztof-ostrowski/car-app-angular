import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarEditComponent } from './car-edit/car-edit.component';

export const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'add', component: CarAddComponent },
  { path: 'edit/:id', component: CarEditComponent },
];
