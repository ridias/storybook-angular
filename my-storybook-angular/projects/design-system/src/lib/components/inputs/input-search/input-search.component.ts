import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})
  
export class InputSearchComponent implements OnInit {
    
    @Input() maxLength: number = 100;
    @Input() isLoading: boolean = false;
    @Input() bgColor: string = "#eee";
    @Input() colorBorder: string = "#ddd";
    @Input() colorIcon: string = "black";
    @Input() color: string = "black";
    @Input() colorIconHover: string = "#ddd";
    @Input() bgColorHover: string = "#aaa";

    @Output() searchCompleted: EventEmitter<string> = new EventEmitter<string>();

    searchValue: string = "";

    constructor(){

    }

    ngOnInit(): void {
        
    }

    checkIfEnterPressed(event: any): void {
        if(this.searchValue.length > this.maxLength){
            event.preventDefault();
        }

        if(event.keyCode == 13 && !this.isLoading){
            this.searchCompleted.emit(this.searchValue);
        }
    } 

    sendSearchValue(): void {
        if(this.isLoading) return;
        this.searchCompleted.emit(this.searchValue);
    }

}