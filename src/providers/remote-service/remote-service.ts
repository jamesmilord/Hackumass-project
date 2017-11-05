import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getPrices(mo, ma, ye, lo){
    console.log(mo+" "+ma+" "+ye+" "+lo );
    this.http.get("http://api.mygasfeed.com/stations/radius/38.58431244/-121.4956055/5/reg/price/tozypp5oqi.json")
    .subscribe(res=>{
      console.log(res.json());
    });
  }

}
