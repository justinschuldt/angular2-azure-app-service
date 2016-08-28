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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./table.service'));
__export(require('./api.service'));
__export(require('./token.service'));
__export(require('./azure.service'));
// from sample
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var table_service_2 = require('./table.service');
var api_service_2 = require('./api.service');
var token_service_2 = require('./token.service');
var azure_service_2 = require('./azure.service');
var AzureServiceModule = (function () {
    function AzureServiceModule() {
    }
    /**
    *  Prepare in-memory-web-api in the root/boot application module
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * InMemoryWebApiModule.forRoot(dbCreator);
    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    AzureServiceModule.forRoot = function (url, authHeaderName) {
        return {
            ngModule: AzureServiceModule,
            providers: [
                { provide: azure_service_2.AzureService, useValue: url },
                { provide: azure_service_2.AzureService, useValue: authHeaderName }
            ]
        };
    };
    AzureServiceModule = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], AzureServiceModule);
    return AzureServiceModule;
}());
exports.AzureServiceModule = AzureServiceModule;
var AzureServiceAAA = (function () {
    function AzureServiceAAA(http, tokenService, tableService, apiService) {
        this.http = http;
        this.tokenService = tokenService;
        this.tableService = tableService;
        this.apiService = apiService;
        this.baseUrl = 'http://asdf.com/';
        this.authHeaderName = 'CUSTOM-AUTH';
        console.debug('azureService constructor ran');
    }
    AzureServiceAAA.prototype.setUrl = function (url) {
        console.log(url);
        this.baseUrl = url;
    };
    AzureServiceAAA.prototype.setAuthHeaderName = function (name) {
        this.authHeaderName = name;
    };
    AzureServiceAAA.prototype.setAuthToken = function (token) {
        this.tokenService.setAuthToken(token);
    };
    AzureServiceAAA.prototype.table = function (name) {
        return this.tableService.table(this.baseUrl, this.authHeaderName, name);
    };
    AzureServiceAAA.prototype.api = function (name) {
        return this.apiService.api(this.baseUrl, this.authHeaderName, name);
    };
    AzureServiceAAA = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [http_1.Http, token_service_2.TokenService, table_service_2.TableService, api_service_2.ApiService])
    ], AzureServiceAAA);
    return AzureServiceAAA;
}());
exports.AzureServiceAAA = AzureServiceAAA;
//# sourceMappingURL=index.js.map