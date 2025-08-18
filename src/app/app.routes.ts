import { Routes } from '@angular/router';
import { SeafarersComponent } from './Pages/seafarers/seafarers.component';
import { BlankComponent } from './Layouts/blank/blank.component';
import { AuthComponent } from './Layouts/auth/auth.component';
import { LoginComponent } from './Pages/login/login.component';
import { authGuard } from './Core/guards/auth/auth.guard';
import { loggedGuard } from './Core/guards/logged/logged.guard';

export const routes: Routes = [
  {path:'' , redirectTo: 'seafarers', pathMatch: 'full'},

  {path:'' , component: BlankComponent, canActivate:[authGuard], children:[
    {path: 'seafarers' , component: SeafarersComponent, title: 'Seafarers'},
    {path: 'dashboard' , loadComponent: ()=> import('./Pages/dashboard/dashboard.component').then((comp => comp.DashboardComponent)) , title: 'Dashboard'},
    {path: 'vacancies' , loadComponent: ()=> import('./Pages/vacancies/vacancies.component').then( (comp => comp.VacanciesComponent)), title: 'Vacancies'},
    {path: 'vessels' , loadComponent: ()=> import('./Pages/vessels/vessels.component').then( (comp => comp.VesselsComponent)), title: 'Vessels'},
    {path: 'prejoining' , loadComponent: ()=> import('./Pages/prejoining/prejoining.component').then( (comp => comp.PrejoiningComponent)), title: 'Prejoin'},
    {path: 'planning' , loadComponent: ()=> import('./Pages/planning/planning.component').then( (comp => comp.PlanningComponent)), title: 'Planning'},
    {path: 'payroll' , loadComponent: ()=> import('./Pages/payroll/payroll.component').then( (comp => comp.PayrollComponent)), title: 'Payroll'},
    {path: 'reports' , loadComponent: ()=> import('./Pages/reports/reports.component').then( (comp => comp.ReportsComponent)), title: 'Reports'},
    {path: 'setting' , loadComponent: ()=> import('./Pages/setting/setting.component').then( (comp => comp.SettingComponent)), title: 'Setting'},
  ]},

  {path: '', component: AuthComponent, canActivate:[loggedGuard], children:[
    {path: 'login' , component:LoginComponent, title:'Login'},
    {path: '**' , component:LoginComponent, title:'Login'}
  ]}
];
