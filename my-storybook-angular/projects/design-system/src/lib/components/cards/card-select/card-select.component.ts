import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { FilterOption } from "../../../models/FilterOption";

@Component({
    selector: 'app-card-select',
    templateUrl: './card-select.component.html',
    styleUrls: ['./card-select.component.scss']
})

export class CardSelectComponent implements OnInit {
    
    @Input() titleCard: string = "Title card";
    @Input() optionIdSelected: number = 1;
    @Input() options: FilterOption[] = [];
    @Input() value: string = "";
    @Input() bgColor: string = "white";
    @Input() bgColorHover: string = "#eee";
    @Input() colorBorder: string = "#ddd";
    @Input() colorIcon: string = "black";
    @Input() colorIconHover: string = "black";
    @Input() color: string = "black";

    @Output() changedStateSelect: EventEmitter<FilterOption> = new EventEmitter<FilterOption>();

    isOpen: boolean = false;

    constructor(){

    }

    ngOnInit(): void {
        
    }

    @HostListener('document:click', ['$event']) clickOutCustomSelect(event: any): void {
        let target = event.target;
        let retries = 10;

        while(target.className != "card-select-item-select" && retries > 0){
            target = target.parentNode;
            if(target == null || target == undefined) break;
            retries -= 1;
        }

        if(target == null || target == undefined){
            this.isOpen = false;
        }
        
        if(target != null || target != undefined){
            if(target.className != "card-select-item-select"){
                this.isOpen = false;
            }
        }
    }

    changeIsOpen(): void {
        this.isOpen = !this.isOpen;
    }

    selectOption(option: FilterOption): void {
        this.inactiveAllOptions();
        option.active = true;
        this.isOpen = false;
        this.value = option.value;
        this.changedStateSelect.emit(option);
    }

    private inactiveAllOptions(): void {
        for(let i = 0; i < this.options.length; i++){
            this.options[i].active = false;
        }
    }
}