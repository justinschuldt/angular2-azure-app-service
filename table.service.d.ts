import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TokenService } from './token.service';
export declare class TableService {
    private http;
    private tokenService;
    tableBase: string;
    tableName: string;
    tableUrl: string;
    token: string;
    authHeaderName: string;
    constructor(http: Http, tokenService: TokenService);
    table(baseUrl: string, authHeaderName: string, name: string): TableService;
    getAll(): Observable<any[]>;
    getById(id: string): Observable<{}>;
    insert(obj: {
        [key: string]: any;
    }): Observable<{}>;
    update(obj: {
        id: string;
        [key: string]: any;
    }): Observable<{}>;
    delete(id: string): Observable<{}>;
    undelete(id: string): Observable<{}>;
    where(criteria: {}): Observable<[any]>;
    private extractData(res);
    private handleError(error);
}
