import { Routes } from '@angular/router';
import { HomePageComponent } from './components/homePage/homePage.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
