import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TokenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TokenProvider {
  public token: string;
  constructor() {
    console.log('Hello TokenProvider Provider');
  }
  get(){
    return this.token;
  }
  set(token:string){
    this.token = token;
  }
}
