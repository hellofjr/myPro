import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimilarProductsListPage } from './similar-products-list';

@NgModule({
  declarations: [
    SimilarProductsListPage,
  ],
  imports: [
    IonicPageModule.forChild(SimilarProductsListPage),
  ]
})
export class SimilarProductsListPageModule { }
