import { Category } from './category.enum';

export interface BookDetails {
  title: string;
  firstName: string;
  lastName: string;
  year: number;
  category: Category;
  description: string;
  imageSrc: string;
}
