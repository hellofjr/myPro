import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductServiceProvider } from '../../providers/product-service/product-service';



/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  productCode: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductServiceProvider, ) {
    this.productCode = this.navParams.data;
  }

  ionViewWillEnter() {
    try {
      let param = {
        code: this.productCode
      }
      this.productService.getProductDetails(param).subscribe((res) => {
        if (res.er == -1) {

        }
      })
    } catch (ex) {
      console.log(ex);
    }
  }

}
