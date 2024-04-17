import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TableHeader } from "../../../models/TableHeader";
import { SortEvent } from "../../../models/SortEvent";

@Component({
    selector: 'app-table-simple',
    templateUrl: './table-simple.component.html',
    styleUrls: ['./table-simple.component.scss']
})

export class TableSimpleComponent implements OnInit {
    
    @Input() headers: TableHeader[] = [];
    @Input() colorIconActive: string = "black";
    @Input() colorIconInactive: string = "grey";
    @Input() borderColor: string = "#DEE2E6";
    @Input() bgColor: string = "#ffffff";
    @Input() color: string = "#444";
    @Input() isLoading: boolean = false;
    @Input() isLoadingColor: string = "black";

    @Output() sortClicked: EventEmitter<TableHeader> = new EventEmitter<TableHeader>();
    
    ngOnInit(): void {
        
    }

    onSort(event: SortEvent): void {
        let id = event.column;
        let tableHeaderColumn = null;
        let posCache = 0;
        for(let i = 0; i < this.headers.length; i++){
            if(this.headers[i].id == id){
                tableHeaderColumn = this.headers[i];
                posCache = i;
                break;
            }
        }

        if(tableHeaderColumn == null) return;
        if(!tableHeaderColumn.isSortCol) return;
        this.setAllDirectionAsDefault();
        this.headers[posCache].direction = event.direction;
        this.sortClicked.emit(tableHeaderColumn);
    }

    private setAllDirectionAsDefault(): void {
        for(let i = 0; i < this.headers.length; i++){
            this.headers[i].direction = "";
        }
    }
}