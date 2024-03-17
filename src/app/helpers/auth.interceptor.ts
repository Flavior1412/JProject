import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });
    let ok: string;
    return next.handle(req).pipe(tap({
      next:(event) => (event instanceof HttpResponse? this.handleEventResponse(event) : ''),
      error: (err) => (this.handleError(err))
    }));
  }
  handleError(err: any): void {
    console.log('err', err);
  }
 
  handleEventResponse(event: HttpResponse<any>): void {
   console.log('ress:', event);
  }
}

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  },
];

