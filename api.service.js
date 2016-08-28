"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var token_service_1 = require('./token.service');
var ApiService = (function () {
    function ApiService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.apiBase = 'api/';
        this.tokenService.token$
            .subscribe(function (token) { return _this.token = token; });
    }
    ApiService.prototype.api = function (baseUrl, authHeaderName, name) {
        this.apiUrl = baseUrl + this.apiBase;
        this.authHeaderName = authHeaderName;
        this.routeName = name;
        return this;
    };
    ApiService.prototype.post = function (obj) {
        var fullUrl = this.apiUrl + this.routeName;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        headers.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(fullUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    ApiService.prototype.put = function (obj) {
        var fullUrl = this.apiUrl + this.routeName;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        headers.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(fullUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    ApiService.prototype.patch = function (obj) {
        var fullUrl = this.apiUrl + this.routeName;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        headers.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.patch(fullUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    ApiService.prototype.get = function () {
        var fullUrl = this.apiUrl + this.routeName;
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(fullUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    ApiService.prototype.extractData = function (res) {
        //console.debug('extractData res: ', res);
        var body = res.json();
        return body || {};
    };
    ApiService.prototype.handleError = function (error) {
        // TODO add a logging service
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map