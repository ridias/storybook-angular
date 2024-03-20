import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { SelectSearchOption } from "../../../models/SelectSearchOption";

@Component({
    selector: 'app-list-box-checkboxes',
    templateUrl: './list-box-checkboxes.component.html',
    styleUrls: ['./list-box-checkboxes.component.scss']
})

export class ListBoxCheckboxesComponent implements OnInit, OnChanges {
    
    @Input() items: SelectSearchOption[] = []
    @Input() itemsCache: SelectSearchOption[] = [];
    @Input() btnClean: string = "Clean all";
    @Input() btnAll: string = "Select all";
    @Input() placeholder: string = "Search...";
    @Input() bgColor: string = "white";
    @Input() bgColorHover: string = "#eee";
    @Input() colorBorder: string = "#ddd";
    @Input() bgColorBtn: string = "#ddd";
    @Input() bgColorHoverBtn: string = "#ccc";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";

    @Output() totalSelected: EventEmitter<number> = new EventEmitter<number>();
    @Output() itemsSelected: EventEmitter<SelectSearchOption[]> = new EventEmitter<SelectSearchOption[]>();

    searchValue: string = "";
    btnText: string = "Select all";
    allSelected: boolean = false;

    constructor(){

    }

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.removeAll();
        this.totalSelected.emit(this.getTotalSelected());
        this.synchronizeItemsChecked();
        this.btnText = this.allSelected ? this.btnClean : this.btnAll;
    }

    changeStatusSelectAll(): void {
        this.allSelected ? this.removeAll() : this.selectAll();
        this.totalSelected.emit(this.getTotalSelected());
        this.synchronizeItemsChecked();
        this.btnText = this.allSelected ?  this.btnClean : this.btnAll;
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
        item.active = !item.active;
        for(let i = 0; i < this.itemsCache.length; i++){
            if(this.itemsCache[i].value == item.value){
                this.itemsCache[i].active = item.active;
                break;
            }
        }

        this.totalSelected.emit(this.getTotalSelected());
        this.synchronizeItemsChecked();
    }

    synchronizeItemsChecked(): void {
        let itemsSelected = [];
        for(let i = 0; i < this.itemsCache.length; i++){
            if(this.itemsCache[i].active){
                itemsSelected.push(this.itemsCache[i])
            }
        }
        this.itemsSelected.emit(itemsSelected);
    }

    private selectAll(): void {
        for(let i = 0; i < this.items.length; i++){
            this.items[i].active = true;
            for(let j = 0; j < this.itemsCache.length; j++){
                if(this.items[i].value == this.itemsCache[j].value){
                    this.itemsCache[j].active = true;
                    break;
                }
            }
        }

        this.allSelected = true;
    }

    private removeAll(): void {
        for(let i = 0; i < this.items.length; i++){
            this.items[i].active = false;
        }

        for(let i = 0; i < this.itemsCache.length; i++){
            this.itemsCache[i].active = false;
        }

        this.allSelected = false;
    }

    private getTotalSelected(): number {
        let total = 0;
        for(let i = 0; i < this.itemsCache.length; i++){
            if(this.itemsCache[i].active == true){
                total++;
            }
        }
        return total;
    }
}