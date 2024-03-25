import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PillOption } from "../../../models/PillOption";

@Component({
    selector: 'app-tabs-icons',
    templateUrl: './tabs-icons.component.html',
    styleUrls: ['./tabs-icons.component.scss']
})

export class TabsIconsComponent implements OnInit {
    
    @Input() tabs: PillOption[] = [];
    @Input() idTabSelected: number = 1;
    @Input() color: string = "#bbb";
    @Input() colorHover: string = "black"
    @Input() colorActive: string = "black";
    @Input() colorBorder: string = "#ddd";
    @Input() bgColor: string = "white";
    @Input() bgColorHover: string = "orange";

    @Output() tabClicked: EventEmitter<PillOption> = new EventEmitter<PillOption>();

    constructor(){
        
    }
    
    ngOnInit(): void {
        
    }

    selectTab(item: PillOption): void {
        if(item.disable) return;
        if(this.idTabSelected == item.id) return;
        this.inactiveAll();
        this.idTabSelected = item.id;
        for(let i = 0; i < this.tabs.length; i++){
            if(this.tabs[i].id == item.id){
                this.tabs[i].active = true;
                break;
            }
        }

        this.tabClicked.emit(item);
    }

    inactiveAll(): void {
        for(let i = 0; i < this.tabs.length; i++){
            this.tabs[i].active = false;
        }
    }
}