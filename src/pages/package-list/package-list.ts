import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackageServiceProvider } from '../../providers/package-service/package-service';

/**
 * Generated class for the PackageListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-package-list',
  templateUrl: 'package-list.html',
})
export class PackageListPage {

  packageList = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public packageService: PackageServiceProvider) {
  }

  ionViewWillEnter() {
    try {
      this.packageService.getCustomPackageList().subscribe((res) => {
        if (res.er == -1) {
          this.packageList = res.items;
        }
      })
    } catch (ex) {
      console.log(ex);
    }
  }

  getSpacePackageList(idx) {
    let id = this.packageList[idx].ID;
    this.navCtrl.push("SpacePackageListPage", id);
  }

}
