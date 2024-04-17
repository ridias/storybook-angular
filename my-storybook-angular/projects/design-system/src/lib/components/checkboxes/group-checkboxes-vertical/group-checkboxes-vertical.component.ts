import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { InputItem } from "../../../models/InputItem";

@Component({
    selector: 'app-group-checkboxes-vertical',
    templateUrl: './group-checkboxes-vertical.component.html',
    styleUrls: ['./group-checkboxes-vertical.component.scss']
})
  
export class GroupCheckboxesVerticalComponent implements OnInit {
    
    @Input() checkboxes: InputItem[] = [];
    @Input() color: string = "black";
    @Input() bgColorChecked: string = "orange";
    @Input() bgColorUnchecked: string = "#eee";
    @Input() bgColorHover: string = "#ccc";
    @Input() colorCheckmark: string = "white";

    @Output() checkboxesSelected: EventEmitter<InputItem[]> = new EventEmitter<InputItem[]>();

    constructor(){

    }

    ngOnInit(): void {
        
    }

    updateStatusCheckbox(item: InputItem): void {
        if(item.disable) return;
        let items: InputItem[] = [];
        for(let i = 0; i < this.checkboxes.length; i++){
            if(item.id == this.checkboxes[i].id){
                this.checkboxes[i].active = !item.active;
            }

            if(this.checkboxes[i].active){
                items.push(this.checkboxes[i]);
            }
        }

        this.checkboxesSelected.emit(items);
    }
}