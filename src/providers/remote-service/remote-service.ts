import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import xml2js from "xml2js";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the RemoteServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  json_data: any = "";
  y: any;
  saving: any = null;
  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  get_make_model_data(make, model){
    const url = "http://www.fueleconomy.gov/ws/rest/ympg/shared/vehicles?make=" + make + "&model=" + model;
    return this.http.get(url).map(body =>{
      body.json();
    });
    //console.log(this.json_data);
    //console.log("first print " + this.json_data);
    
    /*var array = this.json_data["vehicles"]["vehicle"];
    console.log(array);
    var op = [];
    let len = array.length;
    if (len > 0){
      var i;
      for(i = 0; i < len; i += 1){
        if(array[i]["year"] == year){
          op.push(array[i]);
        }
      
      }
    }
    console.log(op);*/
  }
getPrices(ma, mo, ye, lo?){
  console.log(ma+" "+mo);
  const url = "http://www.fueleconomy.gov/ws/rest/ympg/shared/vehicles?make=" + ma + "&model=" + mo;
  console.log(url);
  this.y = this.http.get(url).subscribe(res=>{console.log(res.json())});
  console.log(this.y);

    //console.log(this.json_data);
    /*this.http.get("http://api.mygasfeed.com/stations/radius/38.58431244/-121.4956055/5/reg/price/tozypp5oqi.json")
    .subscribe(res=>{
      //console.log(res.json());
    });*/
  
  }

  getSavings(){
    console.log("xxxx"+this.saving);
    return this.saving;
  }
}
