import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule }  from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { GalleryItemModalComponent } from './gallery/gallery-item-modal/gallery-item-modal.component';

import { ImagesService } from './../services/images.service';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BannerComponent,
      GalleryComponent,
      GalleryItemComponent,
      GalleryItemModalComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatGridListModule,
      LayoutModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatTooltipModule,
      MatBadgeModule,
      MatChipsModule,
      MatProgressSpinnerModule
   ],
   entryComponents: [
      GalleryItemModalComponent
   ],
   providers: [
      ImagesService,
      { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
