import { PixabayResponse } from './../models/pixabay-response';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { ImagesService } from './images.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Image } from 'src/models/image';

describe('Service: Images', () => {
  let service: ImagesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImagesService]
    });
    service = TestBed.get(ImagesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ImagesService = TestBed.get(ImagesService);
    expect(service).toBeTruthy();
   });

  it('should be able to retrieve images from the API via GET', inject([ImagesService], (service: ImagesService) => {
    const page: number = 1;
    const dummyInformation = {
      id: 4843193,
      tags: "landscape, mountains, sky",
      webformatURL: "https://pixabay.com/get/52e8d1404b5baf14ea898279c02b327f1422dfe05b507940712e73d4_640.jpg",
      imageWidth: 7087,
      imageHeight: 4724,
      views: 11204,
      downloads: 8717,
      favorites: 65,
      likes: 111,
      comments: 43,
      user_id: 3764790,
      user: "enriquelopezgarre",
      userImageURL: "https://cdn.pixabay.com/user/2020/02/15/08-34-29-193_250x250.jpg",
      fullHDURL: "https://pixabay.com/get/52e8d1404b5baf14ea898279c02b327f1422dfe05b507940712e73d4_1920.jpg"
    }
    service.getRandomImages(page).subscribe(images => {
      expect(images.length).toBe(8);
      expect(images[0]).toEqual(dummyInformation);
  });

    const request = httpMock.expectOne( `${service.url}&image_type=photo${service.perPage}&page=${page}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyInformation);
  }));

  afterEach(() => {
    httpMock.verify();
  });
});
