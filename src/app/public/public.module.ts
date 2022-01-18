import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class PublicModule { }
