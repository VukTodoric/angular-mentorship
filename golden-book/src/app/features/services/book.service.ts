import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { BookDetails } from '../models/book.model';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClientService: HttpClient) {}

  getAllBooks(): Observable<BookDetails[]> {
    return this.httpClientService
      .get<BookDetails[]>(`${environment.baseApiUrl}books`)
      .pipe(
        map((books) => books.filter((book) => book.deletedAt === null)),
        catchError(() => {
          return throwError(() => new Error('Error while loading books!'));
        })
      );
  }

  getBookById(id: number): Observable<BookDetails> {
    return this.httpClientService.get<BookDetails>(
      `${environment.baseApiUrl}books/${id}`
    );
  }

  deleteBook(book: BookDetails): Observable<void> {
    return this.httpClientService.delete<void>(
      `${environment.baseApiUrl}books/${book.id}`
    );
  }

  softDeleteBook(book: BookDetails): Observable<BookDetails> {
    const deletedTime = new Date().toISOString();

    return this.httpClientService.patch<BookDetails>(
      `${environment.baseApiUrl}books/${book.id}`,
      { deletedAt: deletedTime }
    );
  }
}
