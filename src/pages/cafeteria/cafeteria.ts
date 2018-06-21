import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Cafeteria } from '../../models/cafeteria';

@IonicPage()
@Component({
  selector: 'page-cafeteria',
  templateUrl: 'cafeteria.html',
})
export class CafeteriaPage implements OnInit {

  @ViewChild(Content)
  content: Content;

  cafeteria: Cafeteria;
  novaAltura: any = 45;

  constructor(public navCtrl: NavController, public statusBar: StatusBar, public navParams: NavParams) {
    //statusBar.hide();
  }

  ngOnInit(): void {
    this.cafeteria = this.navParams.get('cafeteria');
  }

  onScroll(ev) {
    
    let capa = document.getElementsByClassName("cafeteria-capa") as HTMLCollectionOf<HTMLElement>;;
    if(ev.scrollTop > 180) {
      capa[0].classList.add("over-shadow-two");
      capa[0].style.height = '12vh';
      capa[0].style.zIndex = '2';
    } else {
      capa[0].style.height = '45vh';
      capa[0].style.zIndex = '1';
      capa[0].classList.remove("over-shadow-two");
    }
  }

  ionViewWillLeave() {
    //this.statusBar.show()
  }

  voltarPagina() {
    this.navCtrl.pop()
  }

}
