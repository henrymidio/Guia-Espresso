import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ModalController, Content } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lista-cafeterias',
  templateUrl: 'lista-cafeterias.html',
})
export class ListaCafeteriasPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController
  ) {
 
  }

  ngOnInit(): void {
    
  }

  presentModalFilter() {
    const modal = this.modalCtrl.create('FilterPage');
    modal.present();
  }

}
