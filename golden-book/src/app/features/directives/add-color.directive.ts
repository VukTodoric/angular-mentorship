import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAddColor]',
})
export class AddColorDirective {
  @Input() color?: string;

  constructor(private el: ElementRef) {}
}
