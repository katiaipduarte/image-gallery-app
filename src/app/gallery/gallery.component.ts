import { Image } from './../../models/image';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  
  @Input() images: Image[];
  @Input() cols: number = 4;
  @Input() rowHeight: number = 1;
  @Input() gutterSize: number = 1;


  constructor() { }

  ngOnInit() {
  }

}
