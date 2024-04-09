import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SelectOption } from "../../../models/SelectOption";

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
  
export class SelectComponent implements OnInit {

    @Input() options: SelectOption[] = [];
    @Input() valueSelected: string = "-1";
    @Input() description: string = "Select...";
    @Input() disabled: boolean = false;
    @Input() bgColor: string = "white";
    @Input() borderColor: string = "#ccc";
    @Input() color: string = "black";

    @Output() changedOption: EventEmitter<SelectOption> = new EventEmitter<SelectOption>();

    constructor(){

    }

    ngOnInit(): void {
        
    }

    onChange(event: any): void {
        this.valueSelected = event.target.value;
        let selectedOption = this.getSelectedOption();
        this.changedOption.emit(selectedOption);
    }

    private getSelectedOption(): SelectOption {
        for(let i = 0; i < this.options.length; i++){
            if(this.options[i].value == this.valueSelected){
                return this.options[i];
            }
        }
        
        return { description: this.description, value: this.valueSelected }
    }
    
}