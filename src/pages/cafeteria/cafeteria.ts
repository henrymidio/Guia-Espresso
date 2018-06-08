import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class CafeteriaPage {

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public navParams: NavParams) {
    statusBar.hide();
  }

  ionViewWillLeave() {
    this.statusBar.show()
  }

  voltarPagina() {
    this.navCtrl.pop()
  }

}
