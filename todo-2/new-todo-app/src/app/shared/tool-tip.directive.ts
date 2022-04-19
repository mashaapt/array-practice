import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {

  @Input('appToolTip') tooltipContent: string;

  public tippyInstance: any;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tooltipContent']) {
      //input content has changed
      this.updatedToolTipContent();
    }
  }

  updatedToolTipContent() {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.tooltipContent);
    }
  }
}
