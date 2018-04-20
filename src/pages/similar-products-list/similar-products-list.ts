import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackageServiceProvider } from '../../providers/package-service/package-service';



/**
 * Generated class for the SimilarProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-similar-products-list',
  templateUrl: 'similar-products-list.html',
})
export class SimilarProductsListPage {

  groupProductID: string;
  groupProducts = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public packageService: PackageServiceProvider) {
    this.groupProductID = this.navParams.data;
  }

  ionViewWillEnter() {
    try {
      let param = {
        id : this.groupProductID
      }
      this.packageService.getGroupProducts(param).subscribe((res)=>{
        if(res.er == -1){
          this.groupProducts = res.items;
        }
      })
    } catch (ex) {
      console.log(ex);
    }
  }

  getProductDetail(idx){
    let code = this.groupProducts[idx].Code;
    this.navCtrl.push("ProductDetailPage",code);
  }

}
