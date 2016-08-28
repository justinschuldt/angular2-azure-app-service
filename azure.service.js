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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./table.service'));
__export(require('./api.service'));
__export(require('./token.service'));
// from sample
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var table_service_2 = require('./table.service');
var api_service_2 = require('./api.service');
var token_service_2 = require('./token.service');
var AzureService = (function () {
    function AzureService(http, tokenService, tableService, apiService, url, authHeaderName) {
        this.http = http;
        this.tokenService = tokenService;
        this.tableService = tableService;
        this.apiService = apiService;
        this.baseUrl = 'http://asdf.com/';
        this.authHeaderName = 'CUSTOM-AUTH';
        console.debug('azureService constructor ran');
        if (url) {
            this.baseUrl = url;
        }
        ;
        if (authHeaderName) {
            this.authHeaderName = name;
        }
        ;
    }
    AzureService.prototype.setUrl = function (url) {
        console.log(url);
        this.baseUrl = url;
    };
    AzureService.prototype.setAuthHeaderName = function (name) {
        this.authHeaderName = name;
    };
    AzureService.prototype.setAuthToken = function (token) {
        this.tokenService.setAuthToken(token);
    };
    AzureService.prototype.table = function (name) {
        return this.tableService.table(this.baseUrl, this.authHeaderName, name);
    };
    AzureService.prototype.api = function (name) {
        return this.apiService.api(this.baseUrl, this.authHeaderName, name);
    };
    AzureService = __decorate([
        core_1.NgModule({}),
        __param(4, core_1.Optional()),
        __param(5, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, token_service_2.TokenService, table_service_2.TableService, api_service_2.ApiService, String, String])
    ], AzureService);
    return AzureService;
}());
exports.AzureService = AzureService;
//# sourceMappingURL=azure.service.js.map