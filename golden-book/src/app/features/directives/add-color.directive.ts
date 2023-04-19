import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoriesService } from '../services/categories.service';
import { map, take } from 'rxjs';

@Directive({
  selector: '[appAddColor]',
})
export class AddColorDirective implements OnInit {
  @Input() category!: Category;

  constructor(
    private el: ElementRef,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.checkCategory();
  }

  checkCategory() {
    this.categoryService.categories$
      .pipe(
        take(1),
        map((categories: Category[]) =>
          categories.map((category: Category) => category.name)
        )
      )
      .subscribe((data) => {
        // data.map((category) => {
        //   switch (category) {
        //     case 'Fantasy':
        //      this.el.nativeElement.classList.add('fantasy');
        //       break;
        //     case 'History':
        //      this.el.nativeElement.classList.add('history');
        //       break;
        //     case 'Literacy':
        //        this.el.nativeElement.classList.add('literary');
        //       break;
        //   }
        // });
      });
  }
}
