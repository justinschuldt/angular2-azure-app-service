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
var TableService = (function () {
    function TableService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        this.tableBase = 'tables/';
        this.tokenService.token$
            .subscribe(function (token) { return _this.token = token; });
    }
    TableService.prototype.table = function (baseUrl, authHeaderName, name) {
        this.tableUrl = baseUrl + this.tableBase;
        this.authHeaderName = authHeaderName;
        this.tableName = name;
        return this;
    };
    TableService.prototype.getAll = function () {
        var fullUrl = this.tableUrl + this.tableName;
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        var options = new http_1.RequestOptions({ headers: headers });
        console.debug('headers: ', headers);
        console.debug('options: ', options);
        return this.http.get(fullUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.getById = function (id) {
        var fullUrl = this.tableUrl + this.tableName + '/' + id;
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        return this.http.get(fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.insert = function (obj) {
        var fullUrl = this.tableUrl + this.tableName;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        headers.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(fullUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.update = function (obj) {
        var fullUrl = this.tableUrl + this.tableName;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        headers.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.patch(fullUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.delete = function (id) {
        var fullUrl = this.tableUrl + this.tableName + '/' + id;
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        return this.http.delete(fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.undelete = function (id) {
        var fullUrl = this.tableUrl + this.tableName + '/' + id;
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        headers.set('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(fullUrl, '', options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.where = function (criteria) {
        var queryString = '';
        for (var prop in criteria) {
            var value = void 0;
            var comparison = 'eq';
            if (typeof criteria[prop] === 'object' && !!criteria[prop]) {
                value = criteria[prop].value;
                comparison = criteria[prop].comparison;
            }
            else {
                // wrap in quotes if this is a string
                value = typeof criteria[prop] === 'string' ? "'" + criteria[prop] + "'" : criteria[prop];
            }
            queryString += "(" + prop + " " + comparison + " " + value + ")";
        }
        queryString = queryString.replace(/\)\(/g, ') and (');
        queryString = '?$filter=(' + encodeURIComponent(queryString) + ')';
        var fullUrl = this.tableUrl + this.tableName + queryString;
        var headers = new http_1.Headers((_a = {}, _a[this.authHeaderName] = this.token, _a));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(fullUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
        var _a;
    };
    TableService.prototype.extractData = function (res) {
        //console.debug('extractData res: ', res);
        var body = res.json();
        return body || {};
    };
    TableService.prototype.handleError = function (error) {
        // TODO add a logging service
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, token_service_1.TokenService])
    ], TableService);
    return TableService;
}());
exports.TableService = TableService;
//# sourceMappingURL=table.service.js.map