import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage implements OnInit {
  
  singleValue: number = 10;
  options: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ngOnInit(): void {
   this.options = [{
     name: 'Wifi',
     active: false
   },
   {
    name: 'Espaço Kids',
    active: false
  },
  {
    name: 'Pet Friendly',
    active: false
  },
  {
    name: 'Terraço',
    active: false
  },
  {
    name: 'Álcool',
    active: false
  },
  {
    name: 'Cursos',
    active: false
  },
  {
    name: 'Wifi',
    active: false
  },
  {
    name: 'Delivery',
    active: false
  },
  {
    name: 'Co-working',
    active: false
  },
  ]
  }

  toggleOptionState(option) {
    option.active = !option.active;
  }

}
