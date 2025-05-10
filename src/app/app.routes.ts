import { Routes } from '@angular/router';

import {HomeComponent} from './core/components/home/home.component';
import {AboutComponent} from './core/components/about/about.component';
import {CoursesComponent} from './domains/products/components/courses/courses.component';



export const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'courses-component', component: CoursesComponent },
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
];
