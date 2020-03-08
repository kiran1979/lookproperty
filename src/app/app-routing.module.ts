import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToRentComponent } from './to-rent/to-rent.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'toRent', component: ToRentComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
