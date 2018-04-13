import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



/**
 * Generated class for the PictureModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture-modal',
  templateUrl: 'picture-modal.html',
})
export class PictureModalPage {

  imgData: string;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.imgData = this.navParams.data;
  }

  hideModal() {
    this.viewCtrl.dismiss();
  }
}
