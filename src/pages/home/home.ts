import { Cafeteria } from './../../models/cafeteria';
import { CafeteriasProvider } from './../../providers/cafeterias/cafeterias';
import { Component, ElementRef, ViewChild, OnInit, NgZone } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  display: string = "mapa";
  displayFooter: boolean = false;

  coffeeStore: Cafeteria;
  csImage: string = "";
  csName: string = "";
  csAddress: string = "";

  cafeterias: Cafeteria[] = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public zone: NgZone,
    private cafeteriasService: CafeteriasProvider
  ) {

  }

  ngOnInit(): void {
    this.loadMap();
  }

  loadCafeterias() {
    this.cafeteriasService.clear()
    this.cafeteriasService.getCafeterias().subscribe((res: any) => {
      res.data.forEach(cafeteria => {
        this.cafeterias.push(new Cafeteria(cafeteria))
        this.addMarker({
          lat: parseFloat(cafeteria.lat),
          lng: parseFloat(cafeteria.lng)
        }, cafeteria)
      });
    })

  }

  loadMap() {

    let latLng = new google.maps.LatLng(-23.549865, -46.6362092);

    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.loadCafeterias();
  }

  addMarker(latLng, cafeteria) {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content, cafeteria);

  }

  addInfoWindow(marker, content, cafeteria) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.coffeeStore = cafeteria;

      this.csAddress = cafeteria.street + ', ' + cafeteria.num;
      this.csImage = cafeteria.cover;
      this.csName = cafeteria.name;

      //Exibe o box da cafeteria
      this.zone.run(() => { this.displayFooter = true; })

    });

  }

  presentModalFilter() {
    const modal = this.modalCtrl.create('FilterPage');
    modal.present();
  }

  openCafeteriaPage() {
    this.navCtrl.push('CafeteriaPage', { cafeteria: this.coffeeStore })
    this.closeThumbnail()
  }

  closeThumbnail() {
    this.displayFooter = false;
  }

}
