import { Category } from '../enums/category.model';
import { Author } from '../author.model';

export interface BookDetails {
  title: string;
  fullName: Author | string;
  year: number;
  category: Category | string;
  description: string;
  imageSrc: string;
}
