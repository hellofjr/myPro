import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

import { PackageServiceProvider } from '../../providers/package-service/package-service';



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
  spaceList = [];
  spacePackageList = [];
  packageItems = [];
  productList = [];
  selectedID: number = 0;
  spaceName: string;
  spacePrice: string;
  customPackageID: string;
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
    public packageService: PackageServiceProvider) {
    this.customPackageID = this.navParams.data;
  }

  ionViewWillEnter() {
    try {
      let param = {
        id: this.customPackageID
      }
      this.getSpacePackage(param, 0);
    } catch (ex) {
      console.log(ex);
    }
  };

  getSpacePackage(param, idx) {
    this.packageService.getSpacePackageList(param).subscribe(res => {
      if (res.er == -1) {
        if (this.spaceList.length == 0) {
          res.items.forEach(element => {
            this.spaceList.push({ Name: element.SpaceName, ID: element.ID, Selected: false });
          });
        };
        this.spacePackageList = res.items;
        this.setPageContent(0);
      }
    })
  }

  setPageContent(idx) {
    this.spaceName = this.spacePackageList[idx].SpaceName;
    this.spacePrice = this.spacePackageList[idx].Price;
    this.productList = this.spacePackageList[idx].SpacePackageItems;
    this.topImg = this.spacePackageList[idx].ImgUrl ? this.spacePackageList[idx].ImgUrl : 'assets/imgs/demo.jpg';
    if (idx != this.selectedID) {
      this.spaceList[this.selectedID].Selected = false;
    }
    this.selectedID = idx;
    this.spaceList[idx].Selected = true;
  }

  selectSpace(idx) {
    this.setPageContent(idx);
  }

  /**
   * 展示全景图
   */
  showKrpano() {
    this.browser = this.themeableBrowser.create('http://img360.fang.com/2017/03/31/gz/720/c6088d66aa7c4481852a2cf8a4f4f75e/index.html?type=hangpai?nc=2811172684', '_blank', this.options);
  }

  goSimilarProductsList(idx) {
    let id = this.productList[idx].GroupID;
    this.navCtrl.push("SimilarProductsListPage", id);
  }

}
