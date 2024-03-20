import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Page } from "../../../models/Page";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
    
    @Input() totalPages: number = 0;
    @Input() currentPage: number = 0; 
    @Input() itemsPerPage: number = 0;
    @Input() colorBorderBtns: string = "#ddd";
    @Input() bgColorBtns: string = "#eee";
    @Input() bgHoverColorBtns: string = "#ddd";
    @Input() colorIcon: string = "black";
    @Input() colorHoverIcon: string = "black";
    @Input() colorBorderSearch: string = "#ddd";
    @Input() bgColorSearch: string = "#eee";

    @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();

    constructor(){

    }

    ngOnInit(): void {
        
    }

    selectPage(page: string){
        let pageInt = parseInt(page, 10) || 1;
        this.currentPage = (0 >= pageInt || this.totalPages < pageInt) ? 1 : pageInt;  
        this.selectedPage.emit(this.currentPage);
    }

    formatInput(input: HTMLInputElement){
        input.value = input.value.replace(/[^0-9]/g, '');
    }

    setToFirstPage(): void {
        if(this.currentPage == 1) return;
        this.currentPage = 1;
        this.selectedPage.emit(this.currentPage);
    }

    previousPage(): void {
        if(this.currentPage <= 1) return;
        this.currentPage -= 1;
        this.selectedPage.emit(this.currentPage);
    }

    nextPage(): void {
        if(this.currentPage >= this.totalPages) return;
        this.currentPage += 1;
        this.selectedPage.emit(this.currentPage);
    }

    setToLastPage(): void {
        if(this.currentPage == this.totalPages) return;
        this.currentPage = this.totalPages;
        this.selectedPage.emit(this.currentPage);
    }

}