import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';



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
    },{
      root: ContactPage,
      tabTitle: "分类",
      tabIcon: "home"
    },{
      root: AboutPage,
      tabTitle: "Home",
      tabIcon: "home"
    }]
  }
}
