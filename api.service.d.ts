import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TokenService } from './token.service';
export declare class ApiService {
    private http;
    private tokenService;
    apiBase: string;
    routeName: string;
    apiUrl: string;
    token: string;
    authHeaderName: string;
    constructor(http: Http, tokenService: TokenService);
    api(baseUrl: string, authHeaderName: string, name: string): ApiService;
    post(obj: {
        [key: string]: any;
    }): Observable<any>;
    put(obj: {
        [key: string]: any;
    }): Observable<any>;
    patch(obj: {
        [key: string]: any;
    }): Observable<any>;
    get(): Observable<any>;
    private extractData(res);
    private handleError(error);
}
