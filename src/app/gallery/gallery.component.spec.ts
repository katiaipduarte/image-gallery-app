import { MatDialogModule } from '@angular/material/dialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GalleryComponent } from './gallery.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ImagesService } from 'src/services/images.service';
import { MatDialog } from '@angular/material/dialog';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,MatDialogModule],
      providers: [ImagesService, MatDialog],
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should show no images', <any>fakeAsync((): void => {
    fixture.detectChanges(); // missed

    fixture.whenStable().then(
      () => {
          const images = fixture.debugElement.queryAll(By.css('.gallery-item')); // use fixture instance to
          expect(images.length).toBe(0);
      });
    }))
});
