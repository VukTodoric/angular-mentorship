import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.enum';

@Directive({
  selector: '[appAddColor]',
})
export class AddColorDirective implements OnInit {
  @Input() category?: Category;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkCategory();
  }

  checkCategory() {
    switch (this.category) {
      case Category.FANTASY:
        this.el.nativeElement.classList.add('fantasy');
        break;
      case Category.HISTORIY:
        this.el.nativeElement.classList.add('history');
        break;
      case Category.LITERACY:
        this.el.nativeElement.classList.add('literary');
        break;
    }
  }
}
