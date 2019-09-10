import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {    
    var element = this.el.nativeElement;

    element.style.background = "blue";
    element.style.padding = "20px";
    element.style.marginTop = "15px";
    element.style.color = "white";

    console.log(element.innerText);
    element.innerText = element.innerText.toUpperCase();
  }

}
