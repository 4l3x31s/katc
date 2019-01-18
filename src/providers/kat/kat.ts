import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TokenProvider} from '../token/token';

/*
  Generated class for the KatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KatProvider {
  headers: HttpHeaders;
  url: string = 'https://quiet-earth-76928.herokuapp.com';
  jsonNew: string;
  constructor(public http: HttpClient, public tokenService:TokenProvider) {
    console.log('Hello KatProvider Provider');
  }
  get<Object>(url:string){
    if(this.tokenService.get()){
      return this.http.get<Object>(this.url + url,{
        headers: new HttpHeaders().set('autorization', this.tokenService.get()).set('Content-Type','application/json'),
      });
    }else {
      return this.http.get<Object>(this.url + url);
    }
  }
  post<Object>(url:string, objeto: any) {

    if (this.tokenService.get()) {
      return this.http.post<Object>(this.url + url, objeto, {
        headers: new HttpHeaders().set('autorization', this.tokenService.get()).set('Content-Type', 'application/json'),
      });
    } else{
      return this.http.post<Object>(this.url + url, objeto, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      });
    }
  }
  delete<Object>(url :string, codigo:string){
    if (this.tokenService.get()) {
      return this.http.delete<Object>(this.url + url + codigo, {
        headers: new HttpHeaders().set('autorization', this.tokenService.get()).set('Content-Type', 'application/json'),
      });
    }else {
      return this.http.delete<Object>(this.url + url + codigo, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      });
    }
  }
  put<Object>(url: string, objeto: any, id: string){
    if (this.tokenService.get()) {
      return this.http.put<Object>(this.url + url + id, objeto, {
        headers: new HttpHeaders().set('autorization', this.tokenService.get()).set('Content-Type', 'application/json'),
      });
    }else{
      return this.http.put<Object>(this.url + url + id, objeto, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      });
    }
  }

}
