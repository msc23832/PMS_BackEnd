import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class MstfeatureService {

  constructor(private http: Http) { }

  getData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/mstroomfeatures/getMstRoomFeature`)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }
}
