import { PixabayResponse } from './../models/pixabay-response';
import { environment } from './../environments/environment';
import { Image } from './../models/image';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { flatMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url: string = environment.apiUrl + environment.apikey + '&q=';
  perPage: string = "&per_page=8";

  constructor(
    private http: HttpClient
  ) { }

  private getImagesSearch(page: number): Observable<PixabayResponse> {
    const subj: Subject<PixabayResponse> = new Subject<PixabayResponse>();
    
    this.http.get(`${this.url}&image_type=photo${this.perPage}&page=${page}`)
      .subscribe(
        (response: PixabayResponse) => {
          subj.next(response);
          subj.complete();
        },
        error => {
          Observable.throw(new Error("Error getting images from API"));
          subj.complete();
        }
      );

    return subj;
  }

  public getRandomImages(page: number): Observable<Image[]> {
    let imagesList: Image[] = [];

    return this.getImagesSearch(page).pipe(
      flatMap((response: PixabayResponse) => {
        if (response.hits.length > 0) {
          imagesList = response.hits;
        }

        return of(imagesList);
      })
    );
  }
}
