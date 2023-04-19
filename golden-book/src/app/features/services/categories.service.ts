import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories$!: Observable<Category[]>;

  constructor(private httpClientService: HttpClient) {}

  setCategories(): void {
    this.categories$ = this.httpClientService
      .get<Category[]>(`${environment.baseApiUrl}categories`)
      .pipe(shareReplay());
  }
}
