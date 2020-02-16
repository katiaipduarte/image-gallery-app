import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Image } from './../../../models/image';


@Component({
  selector: 'app-gallery-item-modal',
  templateUrl: './gallery-item-modal.component.html',
  styleUrls: ['./gallery-item-modal.component.scss']
})
export class GalleryItemModalComponent {

  constructor(
    public dialogRef: MatDialogRef<GalleryItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {
    console.log(data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
