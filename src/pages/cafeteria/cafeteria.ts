import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Cafeteria } from '../../models/cafeteria';

@IonicPage()
@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class CafeteriaPage implements OnInit {

  cafeteria: Cafeteria;

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public navParams: NavParams) {
    //statusBar.hide();
  }

  ngOnInit(): void {
    this.cafeteria = this.navParams.get('cafeteria');
    console.log(this.cafeteria)
  }

  ionViewWillLeave() {
    //this.statusBar.show()
  }

  voltarPagina() {
    this.navCtrl.pop()
  }

}
