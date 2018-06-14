import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Cafeteria } from '../../models/cafeteria';
import { CafeteriasProvider } from '../../providers/cafeterias/cafeterias';

@IonicPage()
@Component({
  selector: 'page-lista-cafeterias',
  templateUrl: 'lista-cafeterias.html',
})
export class ListaCafeteriasPage implements OnInit {

  cafeterias: Cafeteria[] = [];

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private cafeteriasService: CafeteriasProvider
  ) {
 
  }

  ngOnInit(): void {
    this.cafeterias = this.cafeteriasService.cafeterias;
    if(this.cafeterias.length < 1) {
      this.cafeteriasService.getCafeterias().subscribe((res: any) => {
        res.data.forEach(cafeteria => {
          this.cafeterias.push(new Cafeteria(cafeteria))
        });
      });
    }
  }

  presentModalFilter() {
    const modal = this.modalCtrl.create('FilterPage');
    modal.present();
  }

  openCafeteriaPage(cafeteria) {
    this.navCtrl.push('CafeteriaPage', { cafeteria: cafeteria })
  }

  getItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.cafeterias = this.cafeterias.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.cafeterias = this.cafeteriasService.cafeterias;
      
    }
  }

}
