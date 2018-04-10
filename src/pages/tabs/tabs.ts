import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: object[];
  constructor() {
    this.tabRoots = [{
      root: HomePage,
      tabTitle: "Home",
      tabIcon: "home"
    },{
      root: ContactPage,
      tabTitle: "Home",
      tabIcon: "home"
    },{
      root: AboutPage,
      tabTitle: "Home",
      tabIcon: "home"
    }]
  }
}
