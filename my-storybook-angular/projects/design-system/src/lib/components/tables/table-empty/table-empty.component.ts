import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-table-empty',
    templateUrl: './table-empty.component.html',
    styleUrls: ['./table-empty.component.scss']
})

export class TableEmptyComponent implements OnInit {
    
    @Input() titleEmpty: string = "No data yet";
    @Input() description: string = "Try to use search or filters to display data";
    @Input() borderColor: string = "#DEE2E6";
    @Input() colorIcon: string = "#444";
    @Input() bgColor: string = "#fdfdfd";
    @Input() color: string = "#444";

    constructor(){

    }
    
    ngOnInit(): void {
        
    }
}