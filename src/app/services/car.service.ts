
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';



@Injectable()
export class CarService {
    http: any;
    apiKey: String;
    endPoint: String;
    radius: String;
    latitude: String = '38.58431244';
    longitude: String = '-121.4956055';
    //distance: String;
    fuelType: String = 'reg';
    obj:any;


    constructor(http: Http){
        this.http = http;
        this.apiKey = 'tozypp5oqi';
        //this.endPoint = 'http://devapi.mygasfeed.com/stations/radius/'+this.latitude+'/'+this.longitude+'/10/'+this.fuelType+'/price/'+this.apiKey+'.json';
        this.endPoint = 'http://devapi.mygasfeed.com/stations/radius/38.58431244/-121.4956055/5/reg/price/tozypp5oqi.json';
    }

    /*getPrices(ma, mo, ye, lo?){

    
    }*/
}