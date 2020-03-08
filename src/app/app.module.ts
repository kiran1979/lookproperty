import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToRentComponent } from './to-rent/to-rent.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './userDetails/add/add.component';
import { EditComponent } from './userDetails/edit/edit.component';
import { ViewComponent } from './userDetails/view/view.component';
import { AddressApiService } from './address-api.service';

const appRoutes: Routes = [
  { path: 'home', component: ToRentComponent},
  { path: 'register', component: ParentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'edit/:id', component: EditComponent},


];

@NgModule({

  declarations: [
    AppComponent,
    ToRentComponent,
    ParentComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AddressApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
