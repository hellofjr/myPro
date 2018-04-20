import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { GET_GROUP_PRODUCTS, GET_CUSTOM_PACKAGE_LIST, GET_SPACE_PACKAGE_LIST } from '../../providers/constants/constants';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the PackageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PackageServiceProvider {

  // selectSpace
  constructor(public http: Http,
    public httpService: HttpServiceProvider) {

  }

  getGroupProducts(param) {
    return this.httpService.get(GET_GROUP_PRODUCTS, param);
  }

  getCustomPackageList() {
    return this.httpService.get(GET_CUSTOM_PACKAGE_LIST, null);
  }

  getSpacePackageList(param) {
    return this.httpService.get(GET_SPACE_PACKAGE_LIST, param);
  }

}
