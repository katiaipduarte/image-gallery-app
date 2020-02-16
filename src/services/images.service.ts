import { PixabayResponse } from './../models/pixabay-response';
import { environment } from './../environments/environment';
import { Image } from './../models/image';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { flatMap } from "rxjs/operators";
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private url: string = environment.apiUrl + environment.apikey + '&q=';
  private perPage: string = "&per_page=15";

  constructor(
    private http: HttpClient
  ) { }

  private getImagesSearch(): Observable<PixabayResponse> {
    const subj: Subject<PixabayResponse> = new Subject<PixabayResponse>();
    
    this.http.get(`${this.url}&image_type=photo${this.perPage}`)
      .subscribe((response: PixabayResponse) => {
        subj.next(response);
        subj.complete();
      });

    return subj;
  }

  public getRandomImages(): Observable<Image[]> {
    let imagesList: Image[] = [];

    return this.getImagesSearch().pipe(
      flatMap((response: PixabayResponse) => {
        if (response.hits.length > 0) {
          imagesList = response.hits;
        }

        return of(imagesList);
      })
    );
  }
}
