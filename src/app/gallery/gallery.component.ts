import { ImagesService } from './../../services/images.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';

import { GalleryItemModalComponent } from './gallery-item-modal/gallery-item-modal.component';

import { Image } from './../../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {

  cols: number = 4;
  rowHeight: number = 20;
  gutterSize: number = 1;
  numOfImages = 8;
  images: Image[] = [];
  isMobile: boolean = false;
  loading: boolean = true;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public imagesService: ImagesService,
    public dialog: MatDialog 
  ) {}

  ngOnInit() {
    this.createResponsiveLayout();
    this.searchImages();
  }

  ngOnChanges() {
    this.createResponsiveLayout();
  }

  private createResponsiveLayout(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .subscribe((state: BreakpointState) => {        
        if (state.breakpoints[Breakpoints.XLarge]) {
          this.cols = 8;
        }
        if (state.breakpoints[Breakpoints.Large]) {
          this.cols = 4;
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          this.cols = 2;
        }
        if (state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small]) {
          this.cols = 1;
        }
      });
  }

  searchImages(): void {
    this.imagesService.getRandomImages().subscribe(imgList =>  {
      this.images = imgList;
      this.loading = false;
    })
  }

  openGalleryItemModal(image: Image) {
    const dialogRef = this.dialog.open(GalleryItemModalComponent, {
      width: '85%',
      height: '85%',
      data: image
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
