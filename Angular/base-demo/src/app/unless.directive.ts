import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// 自定义结构型指令
@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  private hasView: boolean = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
      this.hasView = true
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear()
      this.hasView = false
    }
  }
}
