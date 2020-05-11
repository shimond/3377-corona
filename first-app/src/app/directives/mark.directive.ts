import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'div[appMark]'
})
export class MarkDirective {

  // []
  @HostBinding('style.color') color = 'blue';

  // ()
  @HostListener('mouseenter') changeColor() {
    this.color = 'red';
  }

  // ()
  @HostListener('mouseout', ['$event']) changeColorBack(e: MouseEvent) {
    this.color = 'blue';
  }

  constructor(private element: ElementRef) {
    console.log('Mark directive ctor');
    //  element.nativeElement.style.color = 'red';
  }

}


// Module
  // Infra
      // Shared
          // Components
          // Directives
          // Pipes
      // Core
        // Services
  // Subjects, Lazy loading
      // Feature modules

// Component - new Html Tag
// Directive - new Html Attribute - ngIf, ngClass, NgFor
    // Input
    // Output
// Pipe - Custom binding behavior - transform
// Service - logic

