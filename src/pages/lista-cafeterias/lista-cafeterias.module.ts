import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCafeteriasPage } from './lista-cafeterias';

@NgModule({
  declarations: [
    ListaCafeteriasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCafeteriasPage),
  ],
})
export class ListaCafeteriasPageModule {}
