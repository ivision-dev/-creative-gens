import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url:string;

  constructor(public baseService:BaseService) { }

  getModel() {
    this.url=`${environment.api}Model`;
    return  this.baseService.getData(this.url);
  }

  getModelById(id) {
    this.url=`${environment.api}Model&modelId=${id}`;
    return this.baseService.getData(this.url)
  }

  postModel(data) {
    this.url=`${environment.api}Model`;
    return this.baseService.postData(this.url,data)
  }

  getInputImagesType () {
    this.url=`${environment.api}InputImagesType`;
    return this.baseService.getData(this.url)
  }
  getInputImagesTypeById (id) {
    this.url=`${environment.api}InputImagesType/${id}`;
    return this.baseService.getData(this.url);
  }
  getOutputImagesTypeById(id) {
    this.url=`${environment.api}OutputImagesType/${id}`;
    return this.baseService.getData(this.url)
  }

  postInputImagesType (data) {
    this.url=`${environment.api}InputImagesType`;
    return this.baseService.postData(this.url,data)
  }
  postInputImages (data) {
    this.url=`${environment.api}InputImagesDetails`;
    return this.baseService.postData(this.url,data)
  }
  deleteInputImagesType(id) {
    this.url=`${environment.api}InputImagesType/${id}`;
    return this.baseService.deleteData(this.url)
  }
  deleteOutputImagesType(id) {
    this.url=`${environment.api}OutputImagesType/${id}`;
    return this.baseService.deleteData(this.url)
  }

  getOutputImagesType () {
    this.url=`${environment.api}OutputImagesType`;
    return this.baseService.getData(this.url)
  }

  postOutputImagesType (data) {
    this.url=`${environment.api}OutputImagesType`;
    return this.baseService.postData(this.url,data)
  }

  getFAQ () {
    this.url=`${environment.api}FAQ`;
    return this.baseService.getData(this.url);
  }
  getFAQByModelId(id) {
    this.url=`${environment.api}FAQ?modelId=${id}`;
    return this.baseService.getData(this.url);
  }

  postFAQ (data) {
    this.url=`${environment.api}FAQ`;
    return this.baseService.postData(this.url,data)
  }

  getGallery() {
    this.url=`${environment.api}Gallery`;
    return this.baseService.getData(this.url)
  }

  getOutputImages(url) {
    this.url=`${environment.api}OutputImages?${url}`;
    return this.baseService.getData(this.url);
  }
}
