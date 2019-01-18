import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ModuleExportMetadata} from "@angular/compiler-cli";
import {Model} from "../../model/model";

/**
 * Generated class for the DetModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-det-model',
  templateUrl: 'det-model.html',
})
export class DetModelPage {
  public model: Model;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetModelPage');
    this.model = this.navParams.get('data');
  }

}
