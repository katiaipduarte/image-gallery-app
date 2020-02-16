import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Image } from './../../../models/image';
import { GlobalConst } from 'src/helpers/constants';


@Component({
  selector: 'app-gallery-item-modal',
  templateUrl: './gallery-item-modal.component.html',
  styleUrls: ['./gallery-item-modal.component.scss']
})
export class GalleryItemModalComponent {

  tagsList: string[] = [];
  imageSize: string = GlobalConst.emptyString;

  constructor(
    public dialogRef: MatDialogRef<GalleryItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {}

  ngOnInit() {
    this.createTagsList();
    this.createImageSize();
  }

  private createTagsList(): void {
    if (this.data.tags !== GlobalConst.emptyString) {
      this.tagsList = this.data.tags.split(",");
    }
  }

  private createImageSize(): void {
    this.imageSize = `${this.data.imageWidth}x${this.data.imageHeight}`;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
