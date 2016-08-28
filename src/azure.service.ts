export * from './table.service';
export * from './api.service';
export * from './token.service';

// from sample
import { NgModule, ModuleWithProviders, Type, Optional } from '@angular/core';
import { HttpModule, XHRBackend }              from '@angular/http';

// from beaoon-mobile
import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import {TableService} from './table.service';
import {ApiService} from './api.service';
import {TokenService} from './token.service';


@NgModule({})
export class AzureService {
    baseUrl: string = 'http://asdf.com/';
    authHeaderName: string = 'CUSTOM-AUTH';
    constructor (
        private http: Http,
        public tokenService: TokenService,
        public tableService: TableService,
        public apiService: ApiService,
        @Optional() url: string,
        @Optional() authHeaderName: string
        ) { 
            console.debug('azureService constructor ran');
            if (url) { this.baseUrl = url; };
            if (authHeaderName) { this.authHeaderName = name };
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
