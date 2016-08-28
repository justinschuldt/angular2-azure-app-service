export * from './table.service';
export * from './api.service';
export * from './token.service';
export * from './azure.service';
import { ModuleWithProviders } from '@angular/core';
import { Http } from '@angular/http';
import { TableService } from './table.service';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
export declare class AzureServiceModule {
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
    static forRoot(url: string, authHeaderName?: string): ModuleWithProviders;
}
export declare class AzureServiceAAA {
    private http;
    tokenService: TokenService;
    tableService: TableService;
    apiService: ApiService;
    baseUrl: string;
    authHeaderName: string;
    constructor(http: Http, tokenService: TokenService, tableService: TableService, apiService: ApiService);
    setUrl(url: string): void;
    setAuthHeaderName(name: string): void;
    setAuthToken(token: string): void;
    table(name: string): TableService;
    api(name: string): ApiService;
}
