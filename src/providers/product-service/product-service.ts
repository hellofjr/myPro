import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { GET_PRODUCT_DETAIL } from '../../providers/constants/constants';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {

  constructor(public http: Http,
    public httpService: HttpServiceProvider) {

  }

  getProductDetails(param) {
    return this.httpService.get(GET_PRODUCT_DETAIL, param);
  }
}
