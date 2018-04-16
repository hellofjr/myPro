import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';


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
    public themeableBrowser: ThemeableBrowser,
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

    let param = {
      page: 1,
      limit: 20
    };
    this.productService.getProductDetail(param).subscribe(res => {
      this.text++;
      console.log(res.items);
    })
  }

  show360(){
    const options: ThemeableBrowserOptions = {
      statusbar: {
        color: '#000b18'
      },
      toolbar: {
        height: 44,
        color: '#f0f0f0ff'
      },
      title: {
        color: '#003264ff',
        showPageTitle: true
      },
      backButton: {
        wwwImage: 'assets/imgs/back.png',
        wwwImagePressed: 'assets/imgs/back_pressed.png',
        wwwImageDensity: 2,
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('http://img360.fang.com/2017/03/31/gz/720/c6088d66aa7c4481852a2cf8a4f4f75e/index.html?type=hangpai?nc=2811172684', '_blank', options);
  }
}
