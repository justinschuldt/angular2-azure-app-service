export * from './table.service';
export * from './api.service';
export * from './token.service';
export * from './azure.service';

// from sample
import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { HttpModule, XHRBackend }              from '@angular/http';

// from beaoon-mobile
import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {TableService} from './table.service';
import {ApiService} from './api.service';
import {TokenService} from './token.service';
import {AzureService} from './azure.service';



@NgModule({})
export class AzureServiceModule {
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
  static forRoot(url: string, authHeaderName?: string): ModuleWithProviders {
    return {
        ngModule: AzureServiceModule,
        providers: [
            { provide: AzureService, useValue: url },
            { provide: AzureService, useValue: authHeaderName }
        ]
    };
  }
}

@NgModule({})
export class AzureServiceAAA {
    baseUrl: string = 'http://asdf.com/';
    authHeaderName: string = 'CUSTOM-AUTH';
    constructor (
        private http: Http,
        public tokenService: TokenService,
        public tableService: TableService,
        public apiService: ApiService
        ) { console.debug('azureService constructor ran')
    }
    setUrl(url: string): void{
        console.log(url)
        this.baseUrl = url;
    }
    setAuthHeaderName(name: string){
        this.authHeaderName = name;
    }
    setAuthToken(token: string): void{
        this.tokenService.setAuthToken(token);
    }
    table(name: string): TableService{
        return this.tableService.table(this.baseUrl, this.authHeaderName, name);
    }
    api(name: string): ApiService {
        return this.apiService.api(this.baseUrl, this.authHeaderName, name);
    }


}
