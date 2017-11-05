import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { SavingCostPage } from './../saving-cost/saving-cost';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';



/**
 * Generated class for the InputDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-data',
  templateUrl: 'input-data.html',
  providers: [RemoteServiceProvider]
})
export class InputDataPage {

  constructor(public navCtrl: NavController, 
          public navParams: NavParams, 
          public loadingCtrl: LoadingController, 
          private remoteservice: RemoteServiceProvider
          ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputDataPage');
  }

  presentLoading(ma, mo, ye, lo?) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    
    console.log(ma+" "+mo);
    this.remoteservice.getPrices(ma.value, mo.value, ye.value, lo.value);
    if(this.remoteservice.getSavings() != null){
      loader.present();
      this.navCtrl.push(SavingCostPage);
    }
    
    
  }



}
