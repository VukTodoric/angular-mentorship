import { Pipe, PipeTransform } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book.model';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(book: BookDetails): string {
    return ` ${book.firstName} ${book.lastName}`;
  }
}
