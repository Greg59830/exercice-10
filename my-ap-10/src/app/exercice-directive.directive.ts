import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExerciceDirective]'
})
export class ExerciceDirectiveDirective {

  @HostBinding('style.color') textColor: string = "white"
  @HostBinding('style.fontWeight') fontWeight: string = "normal"

  constructor(private element: ElementRef, private rendered: Renderer2) { }

  @HostListener('mouseenter')
  mouseEnter (event: Event) {
    this.textColor = "orange"
    this.fontWeight = "bold"
  }
  
  @HostListener('mouseleave')
  mouseLeave (event: Event) {
    this.textColor = "white"
    this.fontWeight = "normal"
  }

}
