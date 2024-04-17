import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { InputItem } from "../../../models/InputItem";

@Component({
    selector: 'app-group-radiobuttons',
    templateUrl: './group-radiobuttons.component.html',
    styleUrls: ['./group-radiobuttons.component.scss']
})
  
export class GroupRadiobuttonsComponent implements OnInit {
    
    @Input() radiobuttons: InputItem[] = [];
    @Input() color: string = "black";
    @Input() bgColorChecked: string = "orange";
    @Input() bgColorUnchecked: string = "#eee";
    @Input() bgColorHover: string = "#ccc";
    @Input() colorCheckmark: string = "white";

    @Output() radiobuttonSelected: EventEmitter<InputItem> = new EventEmitter<InputItem>();

    constructor(){

    }
    
    ngOnInit(): void {
        
    }

    updateStatusRadio(item: InputItem): void {
        if(item.disable) return;
        let index = 0;
        for(let i = 0; i < this.radiobuttons.length; i++){
            this.radiobuttons[i].active = false;
            if(item.id == this.radiobuttons[i].id){
                index = i;
                this.radiobuttons[i].active = true;
            }
        }

        this.radiobuttonSelected.emit(this.radiobuttons[index]);
    }

}