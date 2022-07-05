import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LineChartComponent } from './layouts/line-chart/line-chart.component';
import { PermissionListComponent } from './layouts/permission-list/permission-list.component';
import { RxjsComponent } from './layouts/rxjs/rxjs.component';
import { SelectionComponent } from './layouts/selection/selection.component';
import { UploadComponent } from './layouts/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./layouts/login/login.module').then((dem) => dem.LoginModule),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./layouts/demo/demo.module').then((dem) => dem.DemoModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./layouts/registration/registration.module').then(
        (dem) => dem.RegistrationModule
      ),
  },
  {
    path: 'holiday-list',
    loadChildren: () =>
      import('./layouts/holiday-list/holiday-list.module').then(
        (dem) => dem.HolidayListModule
      ),
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list',
    component: PermissionListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'select',
    component: SelectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'charts',
    component: LineChartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
