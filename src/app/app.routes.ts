import { Routes } from '@angular/router';
import { SeafarersComponent } from './Pages/seafarers/seafarers.component';
import { BlankComponent } from './Layouts/blank/blank.component';
import { AuthComponent } from './Layouts/auth/auth.component';
import { LoginComponent } from './Pages/login/login.component';
import { authGuard } from './Core/guards/auth/auth.guard';
import { loggedGuard } from './Core/guards/logged/logged.guard';
import { NewSeafarerComponent } from './Components/new-seafarer/new-seafarer.component';
import { PersonalDataComponent } from './Components/SeafarerData/personal-data/personal-data.component';
import { ContactDataComponent } from './Components/SeafarerData/contact-data/contact-data.component';
import { OffshoreDataComponent } from './Components/SeafarerData/offshore-data/offshore-data.component';
import { EducationalQualificationsComponent } from './Components/SeafarerData/educational-qualifications/educational-qualifications.component';
import { CertificateComponent } from './Components/SeafarerData/certificate/certificate.component';
import { OtherTrainingComponent } from './Components/SeafarerData/other-training/other-training.component';
import { LanguagesComponent } from './Components/SeafarerData/languages/languages.component';
import { HealthDataComponent } from './Components/SeafarerData/health-data/health-data.component';
import { ReferencesComponent } from './Components/SeafarerData/references/references.component';

export const routes: Routes = [
  {path:'' , redirectTo: 'seafarers', pathMatch: 'full'},

  {path:'' , component: BlankComponent, canActivate:[authGuard], children:[
    {path: 'seafarers' , component: SeafarersComponent, title: 'Seafarers'},
    {path: 'newSeafarer' , component: NewSeafarerComponent, title: 'newSeafarer', children:[
      {path: 'personalData' , component: PersonalDataComponent, title: 'Personal Data'},
      {path: 'contactData' , component: ContactDataComponent, title: 'Contact Data'},
      {path: 'offshoreData' , component: OffshoreDataComponent, title: 'Offshore Data'},
      {path: 'educationalQualifications' , component: EducationalQualificationsComponent, title: 'Educational Qualifications'},
      {path: 'certificate' , component: CertificateComponent, title: 'Certificate'},
      {path: 'otherTraining' , component: OtherTrainingComponent, title: 'Other Training'},
      {path: 'languages' , component: LanguagesComponent, title: 'Languages'},
      {path: 'healthData' , component: HealthDataComponent, title: 'Health & Medical Data'},
      {path: 'references' , component: ReferencesComponent, title: 'References'}
    ]},
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
