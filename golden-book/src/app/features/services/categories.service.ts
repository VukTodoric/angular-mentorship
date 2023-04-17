import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClientService: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClientService.get<Category[]>(
      `${environment.baseApiUrl}categories`
    );
  }
}
