import { Category } from './category.model';
import { Reviewer } from './reviewer.model';

export interface BookDetails {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  country: string;
  isbn: number;
  year: Date;
  category: Category;
  description: string;
  imageSrc: string;
  reviewer: Reviewer;
  deletedAt?: null;
}
