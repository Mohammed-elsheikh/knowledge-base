import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { HttpService } from '../services/http.service';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
    private token: string | null = null;
    errorMessage: string;

    constructor(

    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');

        request = request.clone({
            setHeaders: {
                // "CLIENT-TYPE": 'web',
                // "CLIENT-VERSION": '1.0.0',
                // Authorization: `Bearer ` + token
                //"x-consumer-custom-id": "10001"
                lang:'ar'
            },
        });
        return next.handle(request).pipe(catchError(error => this.handleError(error)));

    }
    handleError(error) {
        console.log('error' , error)
        console.log('error.error' , error.error)
        debugger
        let e:string;
        if(error && error.error){
            //sometimes for unkown reason the error.error came as string not an object
            //so if it came as a string the get the full string otherwise get error.error.errorMsg
            if(typeof error.error === "string")
                e = error.error;
            else
                e = error.error.errorMsg;
        }

        // if(error.status=="500" ){
        //     this.messageService.add({severity:'error', summary:'Server Error', detail:"Internal Server Error",life:10000});
        // }
        // else if(error.status=="401" ){
        //     this.router.navigate(['login']);
        // }
        // else if(typeof e === "string" && e.length>0){
        //     let start = e.indexOf("*_*") + 3;
        //     let end = e.lastIndexOf("*_*");
        //     let message = e.substring(start,end);
        //     this.messageService.add({severity:'error', summary:'Server Error', detail:message,life:10000});
        // }
        // else{
        //     this.messageService.add({severity:'error', summary:'Server Error', detail:'Unkown Error',life:10000});
        // }

        return throwError(error);
    }
}
