import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { MultipleItem } from "../../../models/MultipleItem";

@Component({
    selector: 'app-input-multiple-items',
    templateUrl: './input-multiple-items.component.html',
    styleUrls: ['./input-multiple-items.component.scss']
})
  
export class InputMultipleItemsComponent implements OnInit {
    
    @Input() inputValue: string = "";
    @Input() items: MultipleItem[] = [];
    @Input() cacheItems: MultipleItem[] = [];
    @Input() inputPlaceholderValue: string = "Select options...";
    @Input() descriptionSelectAll: string = "Select all";
    @Input() color: string = "black";
    @Input() bgColorInput: string = "#fdfdfd";
    @Input() borderColorInput: string = "#ddd";
    @Input() bgColorBtn: string = "#ddd";
    @Input() bgColorBtnHover: string = "#ccc";
    @Input() borderColorBtn: string = "#ddd";
    @Input() bgColorItem: string = "white";
    @Input() bgColorHoverItem: string = "#ddd";

    @Output() updatedInputValue: EventEmitter<number[]> = new EventEmitter<number[]>();

    allSelected: boolean = false;
    isOpen: boolean = false;

    constructor(){

    }

    ngOnInit(): void {
        this.allSelected = this.isAllValuesSelected();
    }

    @HostListener('document:click', ['$event']) clickOutCustomSelect(event: any): void {
        let target = event.target;
        let retries = 5;

        while((target.className != "multiple-items-input-btn" && target.className != "multiple-items-input") && retries > 0){
            target = target.parentNode;
            if(target == null || target == undefined) break;
            retries -= 1;
        }

        if(target == null || target == undefined){
            this.switchOptions();
            this.isOpen = false;
        }
        
        if(target != null || target != undefined){
            if(target.className != "multiple-items-input-btn" && target.className != "multiple-items-input"){
                this.switchOptions();
                this.isOpen = false;
            }
        }
    }

    switchOptions(): void {
        this.allSelected = this.isAllValuesSelected();
        this.isOpen = !this.isOpen;
        let namesActive = [];
        let idsActive = [];
        if(!this.isOpen){
            for(let i = 0; i < this.items.length; i++){
                if(this.items[i].active){
                    idsActive.push(this.items[i].id)
                    namesActive.push(this.items[i].name);
                }
            }

            this.inputValue = namesActive.join(";");
            this.updatedInputValue.emit(idsActive);
        }
    }

    changeStatusSelectAll(event: any): void {
        let checked = event.target.checked;
        checked ? this.selectAll() : this.removeAll();
    }

    selectAll(): void {
        for(let i = 0; i < this.cacheItems.length; i++){
            this.cacheItems[i].active = true;
            for(let j = 0; j < this.items.length; j++){
                if(this.cacheItems[i].id == this.items[j].id){
                    this.items[j].active = true;
                    break;
                }
            }
        }

        this.allSelected = true;
    }

    removeAll(): void {
        for(let i = 0; i < this.cacheItems.length; i++){
            this.cacheItems[i].active = false;
            for(let j = 0; j < this.items.length; j++){
                if(this.cacheItems[i].id == this.items[j].id){
                    this.items[j].active = false;
                    break;
                }
            }
        }

        this.allSelected = false;
    }

    activeById(id: number, status: boolean): void {
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id == id){
                this.items[i].active = status;
                break;
            }
        }

        for(let i = 0; i < this.cacheItems.length; i++){
            if(this.cacheItems[i].id == id){
                this.cacheItems[i].active = status;
                break;
            }
        }

        this.allSelected = this.isAllValuesSelected();
    }

    searchByName(event: any): void {
        let name = event.target.value.toLowerCase();
        if(name.length == 0){
            this.cacheItems = [...this.items];
            return;
        }

        this.cacheItems = [];
        for(let i = 0; i < this.items.length; i++){
            let itemName = this.items[i].name.toLowerCase();
            if(new RegExp(name).test(itemName)){
                this.cacheItems.push({
                    id: this.items[i].id,
                    name: this.items[i].name,
                    active: this.items[i].active
                })
            }
        }

        this.allSelected = this.isAllValuesSelected();
    }

    isAllValuesSelected(): boolean {
        for(let i = 0; i < this.cacheItems.length; i++){
            if(!this.cacheItems[i].active) return false;
        }

        return true;
    }
}