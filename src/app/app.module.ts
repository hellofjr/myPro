import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { AboutPage } from '../pages/about/about';
import {PackageListPage} from '../pages/package-list/package-list'
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { PackageServiceProvider } from '../providers/package-service/package-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PackageListPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PackageListPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    ThemeableBrowser,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider,
    HttpServiceProvider,
    PackageServiceProvider
  ]
})
export class AppModule {}
