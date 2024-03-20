import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-input-radiobutton',
    templateUrl: './input-radiobutton.component.html',
    styleUrls: ['./input-radiobutton.component.scss']
})
  
export class InputRadioButtonComponent implements OnInit {
    
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

    updateStatusRadio(event: any): void {
        this.checked = event.target.checked;
        this.activated.emit(this.checked);
    }

}