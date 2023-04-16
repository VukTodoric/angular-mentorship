import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from '../models/book.model';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.enum';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClientService: HttpClient) {}

  getAll(): Observable<BookDetails[]> {
    return this.httpClientService.get<BookDetails[]>(
      `${environment.baseApiUrl}books`
    );
  }

  getById(id: number): Observable<BookDetails> {
    return this.httpClientService.get<BookDetails>(
      `${environment.baseApiUrl}books/${id}`
    );
  }

  deleteBook(book: BookDetails): Observable<BookDetails> {
    return this.httpClientService.delete<BookDetails>(
      `${environment.baseApiUrl}books/${book.id}`
    );
  }

  softDeleteBook(book: BookDetails): Observable<BookDetails> {
    const deletedTime = new Date();

    return this.httpClientService.patch<BookDetails>(
      `${environment.baseApiUrl}books/${book.id}`,
      { deletedAt: deletedTime }
    );
  }

  getCategories(): Observable<Category[]> {
    return this.httpClientService.get<Category[]>(
      `${environment.baseApiUrl}categories`
    );
  }
}
