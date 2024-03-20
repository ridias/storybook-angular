import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-pagination-simple',
    templateUrl: './pagination-simple.component.html',
    styleUrls: ['./pagination-simple.component.scss']
})
  
export class PaginationSimpleComponent implements OnInit {
    
    isDisablePreviousButton: boolean = false;
    isDisableNextButton: boolean = false;

    @Input() totalPages: number = 0;
    @Input() currentPage: number = 0; 
    @Input() itemsPerPage: number = 0;
    @Input() colorBorderBtns: string = "#ddd";
    @Input() bgColorBtns: string = "#eee";
    @Input() bgHoverColorBtns: string = "#ddd";
    @Input() colorIcon: string = "black";
    @Input() colorHoverIcon: string = "black";

    @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        
    }

    nextPage(): void {
        if(this.currentPage + 1 <= this.totalPages){
            this.currentPage += 1;
            this.selectedPage.emit(this.currentPage);
        }
    }

    previousPage(): void {
        if(this.currentPage - 1 > 0){
            this.currentPage -= 1;
            this.selectedPage.emit(this.currentPage);
        }
    }
}