/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GalleryItemModalComponent } from './gallery-item-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImagesService } from 'src/services/images.service';

describe('GalleryItemModalComponent', () => {
  let component: GalleryItemModalComponent;
  let fixture: ComponentFixture<GalleryItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
