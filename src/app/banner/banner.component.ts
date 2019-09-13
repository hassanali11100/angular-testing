import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 'app-banner',
  template: `
    <p>
      banner works!
    </p>
    <div class="test">
      <div class="another-test" #div></div>
    </div>

    <button type="button" (click)="addElement()">Add</button>
  `,
  styles: []
})
export class BannerComponent implements OnInit {
  @ViewChild('div') divElement: ElementRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('###############', this.nameElement.nativeElement)
  }
  
  addElement() {
    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = "this is new paragraph element"
    // thisthis.divElement.nativeElement
    this.renderer.appendChild(this.divElement.nativeElement, p)
  }
}
