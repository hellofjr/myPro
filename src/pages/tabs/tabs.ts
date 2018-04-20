import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { PackageListPage } from '../package-list/package-list'



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: object[];

  constructor() {
    this.tabRoots = [{
      root: HomePage,
      tabTitle: "首页",
      tabIcon: "home"
    }, {
      root: PackageListPage,
      tabTitle: "套餐包",
      tabIcon: "home"
    }, {
      root: AboutPage,
      tabTitle: "Home",
      tabIcon: "home"
    }]
  }
}
