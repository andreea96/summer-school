import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request
    if (this.authService.hasToken()) {
      const token = this.authService.getToken();
      req = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    }
    return next.handle(req);
  }
}
