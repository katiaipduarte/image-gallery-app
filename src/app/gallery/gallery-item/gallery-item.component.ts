import { Image } from './../../../models/image';
import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() image: Image;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;

  @ViewChild('img') img: ElementRef;

  rows: number = 0;

  ngOnInit() {
    
  }

  @HostListener('window:resize')
  calculateRows() {
    this.rows = Math.floor(this.img.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize));
  }
}
