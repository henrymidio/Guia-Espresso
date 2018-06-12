import { ApiProvider } from './../api/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cafeteria } from '../../models/cafeteria';
import 'rxjs/add/operator/share';

@Injectable()
export class CafeteriasProvider {

  cafeterias: Cafeteria[] = []

  constructor(
    public http: HttpClient,
    public api: ApiProvider
  ) {
    console.log('Hello CafeteriasProvider Provider');
  }

  getCafeterias(id?) {
    if(!id) id = "";

    let share = this.api.get("cafeterias/" + id).share();
    share.subscribe((res: any) => {
      res.data.forEach(cafeteria => {
        this.cafeterias.push(new Cafeteria(cafeteria))
      });
    })

    return share;
  }

  clear() {
    this.cafeterias = [];
  }

}
