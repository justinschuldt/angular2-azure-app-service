export * from './table.service';
export * from './api.service';
export * from './token.service';
import { Http } from '@angular/http';
import { TableService } from './table.service';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
export declare class AzureService {
    private http;
    tokenService: TokenService;
    tableService: TableService;
    apiService: ApiService;
    baseUrl: string;
    authHeaderName: string;
    constructor(http: Http, tokenService: TokenService, tableService: TableService, apiService: ApiService, url: string, authHeaderName: string);
    setUrl(url: string): void;
    setAuthHeaderName(name: string): void;
    setAuthToken(token: string): void;
    table(name: string): TableService;
    api(name: string): ApiService;
}
