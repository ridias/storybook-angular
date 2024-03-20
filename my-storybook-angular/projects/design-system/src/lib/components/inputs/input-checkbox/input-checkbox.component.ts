import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-input-checkbox',
    templateUrl: './input-checkbox.component.html',
    styleUrls: ['./input-checkbox.component.scss']
})
  
export class InputCheckboxComponent implements OnInit {
    
    @Input() label: string = "Element";
    @Input() checked: boolean = false;
    @Input() color: string = "black";
    @Input() bgColorChecked: string = "#2196F3";
    @Input() bgColorUnchecked: string = "#eee";
    @Input() bgColorHover: string = "#ccc";
    @Input() colorCheckmark: string = "white";
    @Input() disable: boolean = false;

    @Output() activated: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(){

    }
    
    ngOnInit(): void {
        
    }

    updateStatusCheckbox(event: any): void {
        this.checked = event.target.checked;
        this.activated.emit(this.checked);
    }
}