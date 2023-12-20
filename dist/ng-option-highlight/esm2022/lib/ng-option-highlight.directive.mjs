import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
class NgOptionHighlightDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.element = this.elementRef.nativeElement;
    }
    ngOnChanges() {
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    ngAfterViewInit() {
        this.label = this.element.innerHTML;
        if (this._canHighlight) {
            this._highlightLabel();
        }
    }
    _escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    _highlightLabel() {
        const label = this.label;
        if (!this.term) {
            this._setInnerHtml(label);
            return;
        }
        const alternationString = this._escapeRegExp(this.term).replace(' ', '|');
        const termRegex = new RegExp(alternationString, 'gi');
        this._setInnerHtml(label.replace(termRegex, `<span class=\"highlighted\">$&</span>`));
    }
    get _canHighlight() {
        return this._isDefined(this.term) && this._isDefined(this.label);
    }
    _setInnerHtml(html) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
    }
    _isDefined(value) {
        return value !== undefined && value !== null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: NgOptionHighlightDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.1", type: NgOptionHighlightDirective, selector: "[ngOptionHighlight]", inputs: { term: ["ngOptionHighlight", "term"] }, usesOnChanges: true, ngImport: i0 }); }
}
export { NgOptionHighlightDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: NgOptionHighlightDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngOptionHighlight]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { term: [{
                type: Input,
                args: ['ngOptionHighlight']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbmctb3B0aW9uLWhpZ2hsaWdodC9saWIvbmctb3B0aW9uLWhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUVILFNBQVMsRUFFVCxLQUFLLEVBR1IsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BR2EsMEJBQTBCO0lBT25DLFlBQ1ksVUFBc0IsRUFDdEIsUUFBbUI7UUFEbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU8sYUFBYSxDQUFDLEdBQVc7UUFDN0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyxlQUFlO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDVjtRQUVELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRSxNQUFNLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtJQUN6RixDQUFDO0lBRUQsSUFBWSxhQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFJO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQVU7UUFDekIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7SUFDakQsQ0FBQzs4R0FwRFEsMEJBQTBCO2tHQUExQiwwQkFBMEI7O1NBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUh0QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7aUJBQzlCO3lIQUcyQixJQUFJO3NCQUEvQixLQUFLO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHNlYXJjaEhlbHBlciBmcm9tICcuL3NlYXJjaC1oZWxwZXInO1xuaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25nT3B0aW9uSGlnaGxpZ2h0XSdcbiAgICB9KVxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgnbmdPcHRpb25IaWdobGlnaHQnKSB0ZXJtOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbkhpZ2hsaWdodCkge1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGFiZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgIGlmICh0aGlzLl9jYW5IaWdobGlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodExhYmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9lc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGlnaGxpZ2h0TGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbDtcbiAgICAgICAgaWYgKCF0aGlzLnRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMuX3NldElubmVySHRtbChsYWJlbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbHRlcm5hdGlvblN0cmluZyA9IHRoaXMuX2VzY2FwZVJlZ0V4cCh0aGlzLnRlcm0pLnJlcGxhY2UoJyAnLCAnfCcpO1xuICAgICAgICBjb25zdCB0ZXJtUmVnZXggPSBuZXcgUmVnRXhwKGFsdGVybmF0aW9uU3RyaW5nLCAnZ2knKTtcbiAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKGxhYmVsLnJlcGxhY2UodGVybVJlZ2V4LCBgPHNwYW4gY2xhc3M9XFxcImhpZ2hsaWdodGVkXFxcIj4kJjwvc3Bhbj5gKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfY2FuSGlnaGxpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZWZpbmVkKHRoaXMudGVybSkgJiYgdGhpcy5faXNEZWZpbmVkKHRoaXMubGFiZWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldElubmVySHRtbChodG1sKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpbm5lckhUTUwnLCBodG1sKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0RlZmluZWQodmFsdWU6IGFueSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgICB9XG59XG4iXX0=