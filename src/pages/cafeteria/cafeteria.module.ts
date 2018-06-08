import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CafeteriaPage } from './cafeteria';

@NgModule({
  declarations: [
    CafeteriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CafeteriaPage),
  ],
})
export class CafeteriaPageModule {}
