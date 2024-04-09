import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { SelectSearchOption } from "../../../models/SelectSearchOption";

@Component({
    selector: 'app-select-search',
    templateUrl: './select-search.component.html',
    styleUrls: ['./select-search.component.scss']
})
  
export class SelectSearchComponent implements OnInit {
    
    @Input() inputValue: string = "";
    @Input() placeholder: string = "Select option..."
    @Input() options: SelectSearchOption[] = [];
    @Input() optionsCache: SelectSearchOption[] = [];
    @Input() colorBorder: string = "#ddd";
    @Input() bgColor: string = "#fdfdfd";
    @Input() bgColorHover: string = "#ddd";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";
    @Input() colorIcon: string = "black";
    @Input() colorIconHover: string = "white";


    @Output() selectedOptionEvent: EventEmitter<SelectSearchOption> = new EventEmitter<SelectSearchOption>();

    isOpen: boolean = false;
    searchValue: string = "";

    selectedSearchOption!: SelectSearchOption;

    ngOnInit(): void {
        
    }

    @HostListener('document:click', ['$event']) clickOutCustomSelect(event: any): void {
        let target = event.target;
        let retries = 10;

        while(target.tagName != "APP-SELECT-SEARCH" && retries > 0){
            target = target.parentNode;
            if(target == null || target == undefined) break;
            retries -= 1;
        }

        if(target == null || target == undefined){
            this.switchOptions();
            this.isOpen = false;
        }
        
        if(target != null || target != undefined){
            if(target.tagName != "APP-SELECT-SEARCH"){
                this.isOpen = false;
            }
        }
    }

    switchOptions(): void {
        this.isOpen = !this.isOpen;
    }

    searchByName(event: any): void {
        this.searchValue = event.target.value;
        this.optionsCache = []
        for(let i = 0; i < this.options.length; i++){
            if(new RegExp(this.searchValue).test(this.options[i].optionDescription)){
                this.optionsCache.push(this.options[i]);
            }
        }
    }

    selectOption(option: SelectSearchOption): void {
        this.selectedSearchOption = option;
        this.inputValue = option.optionDescription;
        this.isOpen = false;
        this.selectedOptionEvent.emit(option);
    }
}