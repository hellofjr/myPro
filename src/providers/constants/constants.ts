let SERVE_URL = {
    dev: 'localhost:38500',
    staging: '',
    public: ''
}

let UsingUrl = SERVE_URL.dev;

export const GET_BRAND = "http://" + UsingUrl + "/api/SupplySku/GetProductBrand"