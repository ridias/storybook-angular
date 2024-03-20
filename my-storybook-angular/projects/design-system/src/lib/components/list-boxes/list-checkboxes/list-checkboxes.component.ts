import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SelectSearchOption } from "../../../models/SelectSearchOption";

@Component({
    selector: 'app-list-checkboxes',
    templateUrl: './list-checkboxes.component.html',
    styleUrls: ['./list-checkboxes.component.scss'],
})

export class ListCheckboxesComponent implements OnInit {
    
    @Input() values: SelectSearchOption[] = [];
    @Input() cacheValues: SelectSearchOption[] = [];
    @Input() btnAll: string = "Select all";
    @Input() placeholder: string = "Search...";
    @Input() bgColor: string = "white";
    @Input() bgColorHover: string = "#eee";
    @Input() colorBorder: string = "#ddd";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";

    @Output() updatedOptions: EventEmitter<SelectSearchOption[]> = new EventEmitter<SelectSearchOption[]>();

    allItemsChecked: boolean = false;

    ngOnInit(): void {
        
    }

    updateStatusAllItems(): void {
        for(let i = 0; i < this.values.length; i++){
            this.values[i].active = this.allItemsChecked;
        }

        for(let i = 0; i < this.values.length; i++){
            for(let j = 0; j < this.cacheValues.length; j++){
                if(this.values[i].value == this.cacheValues[j].value){
                    this.cacheValues[j].active = this.allItemsChecked;
                    break;
                }
            }
        }

        this.updatedOptions.emit(this.cacheValues);
    }

    updateStatusDevice(description: string, active: boolean): void {
        for(let i = 0; i < this.values.length; i++){
            if(this.values[i].value == description){
                this.values[i].active = active;
                break;
            }
        }

        this.updateStatusDeviceOriginal(description, active);

        if(!active){
            this.allItemsChecked = false;
        }

        this.allItemsChecked = this.isAllValuesSelected();
    }

    updateStatusDeviceOriginal(description: string, active: boolean): void {
        for(let i = 0; i < this.cacheValues.length; i++){
            if(this.cacheValues[i].value == description){
                this.cacheValues[i].active = active;
                break;
            }
        }

        this.updatedOptions.emit(this.cacheValues);
    }
    
    search(event: any): void {
        let val = (event.target.value + "").toLowerCase();
        if(val.length == 0) {
            this.values = [...this.cacheValues];
            this.allItemsChecked = this.isAllValuesSelected();
        }else{
            this.values = [];
            for(let i = 0;  i < this.cacheValues.length; i++){
                let cacheName = this.cacheValues[i].value.toLowerCase();
                if(new RegExp(val).test(cacheName)){
                    this.values.push(this.cacheValues[i])
                }
            }

            this.allItemsChecked = this.isAllValuesSelected();
        }
    }

    isAllValuesSelected(): boolean {
        for(let i = 0; i < this.values.length; i++){
            if(!this.values[i].active) return false;
        }

        return true;
    }
}