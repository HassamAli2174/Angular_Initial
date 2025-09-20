import { Directive, ElementRef, inject, input, effect } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);

  constructor() {
    // Use effect to reactively update styles when iscompleted changes
    effect(() => {
      this.updateStyles();
    });
  }

  private updateStyles(): void {
    const element = this.el.nativeElement;
    
    if (this.isCompleted()) {
      // Enhanced styling for completed todos
      element.style.textDecoration = 'line-through';
      element.style.backgroundColor = '#e8f5e8';
      element.style.color = '#4a5568';
      element.style.opacity = '0.7';
      element.style.borderLeft = '4px solid #48bb78';
      element.style.paddingLeft = '12px';
      element.style.borderRadius = '4px';
      element.style.transition = 'all 0.3s ease-in-out';
      element.style.transform = 'scale(0.98)';
      element.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
      // Reset to normal styling for pending todos
      element.style.textDecoration = 'none';
      element.style.backgroundColor = '#ffffff';
      element.style.color = '#2d3748';
      element.style.opacity = '1';
      element.style.borderLeft = '4px solid #4299e1';
      element.style.paddingLeft = '12px';
      element.style.borderRadius = '4px';
      element.style.transition = 'all 0.3s ease-in-out';
      element.style.transform = 'scale(1)';
      element.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
  }
}
