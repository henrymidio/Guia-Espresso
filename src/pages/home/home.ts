import { Component, ElementRef, ViewChild, OnInit, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  display: string = "mapa";
  displayFooter: boolean = false;
 
  constructor(public navCtrl: NavController, public zone: NgZone) {
 
  }

  ngOnInit(): void {
    this.loadMap();
    this.addMarker();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }

  addMarker(){
    
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);
    
  }

  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      this.zone.run(()=>{this.displayFooter = true;})
    });
   
  }

  openCafeteriaPage() {
    this.navCtrl.push('CafeteriaPage')
  }

}
