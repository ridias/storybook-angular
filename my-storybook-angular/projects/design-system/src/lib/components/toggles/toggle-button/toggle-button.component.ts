import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-toggle-button',
    templateUrl: './toggle-button.component.html',
    styleUrls: ['./toggle-button.component.scss']
})
  
export class ToggleButtonComponent {

    @Input() valueOn: string = "On"
    @Input() valueOff: string = "Off"
    @Input() disabled: boolean = false;
    @Input() color: string = "black";
    @Input() colorHover: string = "black";
    @Input() colorActive: string = "white";
    @Input() colorActiveHover: string = "white";
    @Input() bgColor: string = "#fdfdfd";
    @Input() bgColorHover: string = "#eee";
    @Input() bgColorActive: string = "orange";
    @Input() bgColorActiveHover: string = "orangered";
    @Input() colorBorder: string = "#ddd";
    @Input() active: boolean = false;

    @Output() activated: EventEmitter<boolean> = new EventEmitter<boolean>();

    value: string = "";

    constructor(){
        this.value = this.valueOff;
    }

    triggedButton(): void {
        this.active = !this.active;
        this.value = this.active ? this.valueOn : this.valueOff;
        this.activated.emit(this.active);
    }
}