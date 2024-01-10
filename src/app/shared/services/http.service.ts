import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface API {
    data: any;
    errorMessage: string;
    isSuccess: boolean;
    statusCode: number;
    successMessage: string;
}
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private serverUrl = environment.BACKEND_URL;


    constructor(private http: HttpClient) { }

    get<T>(apiName: string, param?: any): Observable<T> {

        return this.http.get<API>(`${this.serverUrl}${apiName}`, { params: param }).pipe(map((event: any) => {
            return event;
        }
        ));
    }
    post<T>(apiName: string, body?: any, showAlert = true): Observable<T> {
        return this.http.post<API>(`${this.serverUrl}${apiName}`, body ? body : null).pipe(map((event: any) => {
            // showAlert ? this.alertHandling(event) : '';
            return event;
        }));
    }
    put(apiName: string, body: any): Observable<any> {
        return this.http.put(`${this.serverUrl}${apiName}`, body).pipe(map((event: any) => {
            this.alertHandling(event);
            return event;
        }));
    }

    delete(apiName: string, body?: any): Observable<any> {
        return this.http.delete(`${this.serverUrl}${apiName}`, body).pipe(map((event: any) => {
            this.alertHandling(event);
            return event;
        }));
    }
    alertHandling(event: any): void {
       // handle error
    }
    errorHandling(event: any): void {
            // handle error
    }
}
