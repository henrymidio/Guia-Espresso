import { ListaCafeteriasPage } from './../lista-cafeterias/lista-cafeterias';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root = HomePage;
  tab2Root = ListaCafeteriasPage;
  tab3Root = FavoritosPage;

  constructor() {

  }
}
