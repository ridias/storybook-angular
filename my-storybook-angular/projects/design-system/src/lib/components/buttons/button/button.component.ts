import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
  
export class ButtonComponent {

    @Input() value: string = "Button"
    @Input() disabled: boolean = false;
    @Input() color: string = "white";
    @Input() colorHover: string = "white";
    @Input() bgColor: string = "orange";
    @Input() bgColorHover: string = "orangered";
    @Input() colorBorder: string = "orange";

    @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    triggedButton(): void {
        this.clicked.emit(true);
    }
}