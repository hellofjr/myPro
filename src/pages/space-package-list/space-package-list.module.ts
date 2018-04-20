import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpacePackageListPage } from './space-package-list';

@NgModule({
  declarations: [
    SpacePackageListPage,
  ],
  imports: [
    IonicPageModule.forChild(SpacePackageListPage),
  ]
})
export class SimilarProductsListPageModule { }
