import { Observable } from 'rxjs/Observable';
export declare class TokenService {
    private tokenSubject;
    token$: Observable<string>;
    setAuthToken(token: string): void;
}
