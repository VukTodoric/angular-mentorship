import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Directive({
  selector: '[appAddColor]',
})
export class AddColorDirective implements OnInit {
  @Input() category!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkCategory();
  }

  checkCategory() {
    switch (this.category) {
      case 'Fantasy':
        this.el.nativeElement.classList.add('fantasy');
        break;
      case 'History':
        this.el.nativeElement.classList.add('history');
        break;
      case 'Literacy':
        this.el.nativeElement.classList.add('literary');
        break;
    }
  }
}
