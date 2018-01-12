import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  constructor(private router: Router, private http: Http) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  doLogin(body): Observable<any> {
    const bodyString = JSON.stringify(body);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    console.log(bodyString);
    return this.http.post(
      `${environment.apiUrl}/api/CustomUsers/add_to_login`, bodyString, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }
}
