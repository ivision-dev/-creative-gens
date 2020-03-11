import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input('imagesData')  imagesData=[];
  @Output() selectImage = new EventEmitter();
  customOptions: OwlOptions = {
    loop: true,
    center: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 20,
    dots: false,
    navSpeed: 700,
    autoWidth:true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 5
      },
      740: {
        items: 5

      },
      940: {
        
    items:10,
        
      }
    },
    nav: false
  }

  constructor(public projectService:ProjectService) { }

  ngOnInit(): void {
   
  }
  selectGalleryImage(url) {
   this.selectImage.emit(url);
  }

}
