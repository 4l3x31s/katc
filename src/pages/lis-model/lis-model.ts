import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Model} from "../../model/model";
import {DetModelPage} from "../det-model/det-model";

/**
 * Generated class for the LisModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lis-model',
  templateUrl: 'lis-model.html',
})
export class LisModelPage {
  public request: Array<Model>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.request = this.navParams.get('data');
    console.log("**********************************");
    console.log(JSON.stringify(this.request));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LisModelPage');
  }
  verDetalle(model: Model){
    this.navCtrl.push(DetModelPage, {data: model});
  }

}
