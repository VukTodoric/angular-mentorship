import { Category } from './category.enum';
import { Reviewer } from './reviewer.model';

export interface BookDetails {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  country: string;
  isbn: number;
  year: number;
  category: Category;
  description: string;
  imageSrc: string;
  reviewer: Reviewer;
  deletedAt?: null;
}
