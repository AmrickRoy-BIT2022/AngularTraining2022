import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RxjsComponent } from './layouts/rxjs/rxjs.component';

const routes: Routes = [{
  path:'',
  loadChildren:() =>import('./layouts/login/login.module').then(dem => dem.LoginModule)
},
{
  path:'demo',
  loadChildren:() =>import('./layouts/demo/demo.module').then(dem => dem.DemoModule), canActivate: [AuthGuard]
},{
  path:'registration',
  loadChildren:() =>import('./layouts/registration/registration.module').then(dem => dem.RegistrationModule)
},{
  path: 'rxjs', component: RxjsComponent, canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
