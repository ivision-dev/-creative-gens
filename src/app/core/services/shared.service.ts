import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private spinner: NgxSpinnerService) { }

  showingSpinner()
  {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 9000);
  }
  hidingSpinner()
  {
    this.spinner.hide();
  }
}
