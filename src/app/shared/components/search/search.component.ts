import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input('dataSource') dataSource;
  @Output() newDataSource = new EventEmitter();

  constructor() {

   }

  ngOnInit(): void {
   console.log(this.dataSource);
   
  }

  searchHandle(searchText) {
    let data=this.dataSource.filter(res => {
      return res.tag.toLocaleLowerCase().match(searchText.toLocaleLowerCase())
    })
    this.newDataSource.emit(data)
  }

}
