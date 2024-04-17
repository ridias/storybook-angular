import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
  
export class CheckboxComponent implements OnInit {
    
    @Input() label: string = "Element";
    @Input() checked: boolean = false;
    @Input() color: string = "black";
    @Input() bgColorChecked: string = "orange";
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