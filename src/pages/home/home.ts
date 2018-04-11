import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ProductServiceProvider } from '../../providers/product-service/product-service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  num: number = 0;
  x: number = 0;
  disX: number = 0;
  text: number = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public productService: ProductServiceProvider) {
  }

  //测试rotateImg
  panStart(ev) {
    var ev = ev || event;
    this.disX = ev.deltaX - this.x;
  }

  panEvent(ev) {
    this.x = ev.deltaX - this.disX;
    this.num = parseInt((this.x / 15).toFixed(0));
    if (this.num > 0) {
      this.num = this.num % 59 + 1;
    } else {
      this.num = (this.num + -59 * (Math.floor(this.num / 59))) + 1;
    }
  }

  showHDPic() {
    // let imgData = {
    //   url: 'assets/rotateImgs/img_' + this.num + '.png'
    // }
    // let mymodal = this.modalCtrl.create('PictureModalPage', imgData, {
    //   cssClass: 'pictureModal'
    // });
    // mymodal.present();

    let apiUrl = 'http://localhost:38500/api/SupplySku/GetProductBrand';
    let option = {
      page:1,
      limit:20
    };
    this.productService.getProductDetail(apiUrl, option).subscribe(res => {
      this.text++;
      console.log(res.items);
    })
  }
}
