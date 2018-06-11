import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class CafeteriaPage implements OnInit {

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public navParams: NavParams) {
    statusBar.hide();
  }

  ngOnInit(): void {
    
  }

  ionViewWillLeave() {
    this.statusBar.show()
  }

  voltarPagina() {
    this.navCtrl.pop()
  }

}
