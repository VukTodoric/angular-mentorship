import { Directive, ElementRef, Input, OnInit } from '@angular/core';

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
        this.el.nativeElement.children[0].classList.add('fantasy');
        break;
      case 'History':
        this.el.nativeElement.children[0].classList.add('history');
        break;
      case 'Literacy':
        this.el.nativeElement.children[0].classList.add('literary');
        break;
    }
  }
}
