import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { InputItem } from "../../../models/InputItem";

@Component({
    selector: 'app-radiobutton-option',
    templateUrl: './radiobutton-option.component.html',
    styleUrls: ['./radiobutton-option.component.scss']
})
  
export class RadioButtonOptionComponent implements OnInit {
    
    @Input() radiobutton!: InputItem;
    @Input() color: string = "black";
    @Input() borderColor: string = "#ccc";
    @Input() borderColorChecked: string = "orange";
    @Input() bgColorChecked: string = "orange";
    @Input() bgColorUnchecked: string = "#eee";
    @Input() bgColorHover: string = "#ccc";
    @Input() colorCheckmark: string = "white";

    @Output() radiobuttonSelected: EventEmitter<InputItem> = new EventEmitter<InputItem>();

    constructor(){
        
    }
    
    ngOnInit(): void {
        
    }

    activeOption(): void {
        if(this.radiobutton.disable) return;
        if(this.radiobutton.active) return;
        this.radiobutton.active = true;
        this.radiobuttonSelected.emit(this.radiobutton);
    }
}