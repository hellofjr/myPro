import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

import { ProductServiceProvider } from '../../providers/product-service/product-service';


/**
 * Generated class for the SpacePackageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-package-list',
  templateUrl: 'space-package-list.html',
})
export class SpacePackageListPage {

  topImg: string;
  spaceList = [
    { Name: '客厅', ID: '1', Selected: true },
    { Name: '餐厅', ID: '2', Selected: false },
    { Name: '卧室', ID: '3', Selected: false },
    { Name: '厨房', ID: '4', Selected: false },
    { Name: '卫生间', ID: '5', Selected: false }
  ];
  selectedID: number = 0;
  browser: ThemeableBrowserObject;
  options: ThemeableBrowserOptions = {
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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public themeableBrowser: ThemeableBrowser,
    public productService: ProductServiceProvider) {
  }

  ionViewWillEnter() {
    this.topImg = 'assets/imgs/demo.jpg';
  }

  selectSpace(idx) {
    let spaceID = this.spaceList[idx].ID;
    let param = {
      id: spaceID
    };
    // this.productService.getPackageDetail(param).subscribe(res => {
    //   console.log(res.items);
    this.spaceList[this.selectedID].Selected = false;
    this.selectedID = idx;
    this.spaceList[idx].Selected = true;
    // });
  }

  /**
   * 展示全景图
   */
  showKrpano() {
    this.browser = this.themeableBrowser.create('http://img360.fang.com/2017/03/31/gz/720/c6088d66aa7c4481852a2cf8a4f4f75e/index.html?type=hangpai?nc=2811172684', '_blank', this.options);
  }

  goSimilarProductsList() {
    
    this.navCtrl.push("SimilarProductsListPage");
  }

}
