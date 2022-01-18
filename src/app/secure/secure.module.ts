import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { SecureComponent } from './secure.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent,
    SecureComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: []
})
export class SecureModule { }
