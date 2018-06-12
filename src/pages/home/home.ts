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
  displayFooter: boolean = false;
  displayList: boolean = false;
  searchbarFocus: boolean = false;

  coffeeStore: Cafeteria;

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

  hideMap(bool) {
    const wrapper: any = document.getElementById("map-wrapper");
    if(bool) {
      wrapper.style.display = "none";
      this.displayList = true;
    } else {
      this.displayList = false;
      wrapper.style.display = "block";
    }
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

  updateLocationMap(lat, lng, cafeteria) {
    this.hideMap(false)
    this.map.setCenter(new google.maps.LatLng(lat, lng))
    this.map.setZoom(18);
    this.coffeeStore = cafeteria;
    this.displayFooter = true;
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
  }

  closeThumbnail() {
    this.displayFooter = false;
  }

  onSearchFocus(bool) {
    //this.navCtrl.parent.select(1);
    this.displayFooter = false;
    this.hideMap(bool)
  }

}
