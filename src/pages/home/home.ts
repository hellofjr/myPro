import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular';

import { ProductServiceProvider } from '../../providers/product-service/product-service';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('Slides') slides: Slides;
  num: number = 0;
  x: number = 0;
  disX: number = 0;

  imagesList = [
    { Url: '//img001.mllres.com/images/small/291/width/280/height/197/mode/1/encrypt/47aba4fc670872578073e99ee72211a2/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOG9f5ix+9iXluumWB3RzCCBYw5VWmk0xxP1NW3ynkgJQ==.jpg' },
    { Url: '//img001.mllres.com/images/small/376/width/280/height/197/mode/1/encrypt/d1b278991c4cb0351a0b58d46d580d14/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHP69jhERgJVKKbTDoGj343P9nUb6IIA8cyd2FsLppHTTw==.jpg' },
    { Url: '//img003.mllres.com/images/small/584/width/565/height/374/mode/1/encrypt/58388ff0b49de9fc30e53ee4cfa72501/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPI_9xgm7e5+8LGV6twsKEZiPZm53_fcONo0BCiNWYbmZtBkmwqUSNG1pBHQen20GhfYVvcVi8R9yKY4tvLXtZ3C99+GXSxIpLkOxMm06EEvlaU2VAnTacGSyek0GEK_wk=.jpg' }
  ]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public productService: ProductServiceProvider) {
  }

  /**
   * 测试rotateImg
   * @param ev 
   */
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

  }

  /** 
   * 自动滚动
  */
  autoplay() {
    this.slides.startAutoplay();
  }

  /**
   * 获取指定套餐包
   * @param idx 
   */
  getPackageDetail(idx) {
    this.navCtrl.push("SpacePackageListPage");
  }
}
