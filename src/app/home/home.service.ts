import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private http: Http) {
    console.log('Test');
  }

    // insertData(body): Observable<any> {
    //   const bodyString = JSON.stringify(body); // Stringify payload
    //   const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //   const options = new RequestOptions({ headers: headers }); // Create a request option
    //   return this.http.post(`${environment.apiUrl}/api/properties/save`, bodyString, options) // ...using post request
    //     .map((res: Response) => {
    //       return res.json();
    //     }) // ...and calling .json() on the response to return data
    //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
    // }

    // getData(body): Observable<any> {
    //   const bodyString = JSON.stringify(body); // Stringify payload
    //   const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    //   const options = new RequestOptions({ headers: headers }); // Create a request option
    //   return this.http.post(`${environment.apiUrl}/api/properties/`, bodyString, options)
    //     .map((res: Response) => {
    //       return res.json();
    //     })
    //     .catch((error: any) => Observable.throw(error));
    // }

    getData(): Observable<any> {
      console.log('test');
      return this.http.get(`${environment.apiUrl}/api/properties/getProperty`)
      .map((res: Response) => {
          return res.json();
        })
        .catch((error: any) => Observable.throw(error));
    }

    insertData(body): Observable<any> {
      const bodyString = JSON.stringify(body); // Stringify payload
      const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
      const options = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(`${environment.apiUrl}/api/properties/postProperty`, bodyString, options) // ...using post request
        .map((res: Response) => {
          return res.json();
        }) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
    }

}
