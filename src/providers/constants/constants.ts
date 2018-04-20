let SERVE_URL = {
    dev: 'localhost:38500',
    staging: '',
    public: ''
}

let UsingUrl = SERVE_URL.dev;

export const GET_GROUP_PRODUCTS = "http://" + UsingUrl + "/api/CustomPackage/GetGroupProducts";

export const GET_CUSTOM_PACKAGE_LIST = "http://" + UsingUrl + "/api/CustomPackage/GetCustomPackageList";

export const GET_SPACE_PACKAGE_LIST = "http://" + UsingUrl + "/api/CustomPackage/GetSpacePackageList";

export const GET_PRODUCT_DETAIL = "http://" + UsingUrl + "/api/Product/GetProductDetails";