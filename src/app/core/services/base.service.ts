import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http:HttpClient,public sharedServices:SharedService) { }

  getData(url) {
     return this.http.get(url)
    .pipe(catchError(err => this.showError(err)));
  }

  postData(url,data) {
    return this.http.post(url,data)
   .pipe(catchError(err => this.showError(err)));
 }

 deleteData(url) {
  return this.http.delete(url)
 .pipe(catchError(err => this.showError(err)));
  }

  putData(url,data) {
    return this.http.put(url,data)
  .pipe(catchError(err => this.showError(err)));
  }
  patchData(url,data) {
    return this.http.patch(url,data)
  .pipe(catchError(err => this.showError(err)));
  }

  showError(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent) {
      this.sharedServices.hidingSpinner();
      console.error(errorResponse.error.message);
    }
    else{
      this.sharedServices.hidingSpinner();
      console.error(errorResponse.error.message);
    }
    return throwError("Please Try Again")
      }
}
