import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SelectSearchOption } from "../../../models/SelectSearchOption";

@Component({
    selector: 'app-list-box-radiobuttons',
    templateUrl: './list-box-radiobuttons.component.html',
    styleUrls: ['./list-box-radiobuttons.component.scss']
})

export class ListBoxRadioButtonsComponent implements OnInit {
    
    @Input() items: SelectSearchOption[] = []
    @Input() itemsCache: SelectSearchOption[] = [];
    @Input() placeholder: string = "Search..."
    @Input() bgColor: string = "white";
    @Input() bgColorHover: string = "#eee";
    @Input() colorBorder: string = "#ddd";
    @Input() bgColorBtn: string = "#ddd";
    @Input() bgColorHoverBtn: string = "#ccc";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";

    @Output() itemSelected: EventEmitter<SelectSearchOption> = new EventEmitter<SelectSearchOption>();

    searchValue: string = "";

    constructor(){

    }

    ngOnInit(): void {
        
    }

    searchByValue(event: any): void {
        this.searchValue = event.target.value.toLowerCase();
        if(this.searchValue.length == 0){
            this.items = [...this.itemsCache]
        }else{
            this.items = [];
            for(let i = 0; i < this.itemsCache.length; i++){
                let description = this.itemsCache[i].optionDescription.toLowerCase();
                if(new RegExp(this.searchValue).test(description)){
                    this.items.push(this.itemsCache[i]);
                }
            }
        }
    }

    setChecked(item: SelectSearchOption): void {
        this.removeAll()
        item.active = true;
        for(let i = 0; i < this.itemsCache.length; i++){
            if(this.itemsCache[i].value == item.value){
                this.itemsCache[i].active = item.active;
                break;
            }
        }

        this.synchronizeItemsChecked();
    }

    synchronizeItemsChecked(): void {
        let itemSelected: SelectSearchOption | undefined = undefined
        for(let i = 0; i < this.itemsCache.length; i++){
            if(this.itemsCache[i].active){
                itemSelected = this.itemsCache[i]
                break;
            }
        }
        this.itemSelected.emit(itemSelected);
    }
    
    private removeAll(): void {
        for(let i = 0; i < this.items.length; i++){
            this.items[i].active = false;
        }

        for(let i = 0; i < this.itemsCache.length; i++){
            this.itemsCache[i].active = false;
        }
    }
}