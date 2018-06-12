import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CabecalhoComponent } from './cabecalho/cabecalho';
@NgModule({
	declarations: [CabecalhoComponent],
	imports: [IonicModule],
	exports: [CabecalhoComponent]
})
export class ComponentsModule {}
