import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PillOption } from "../../../models/PillOption";

@Component({
    selector: 'app-pills-rounded-vertical',
    templateUrl: './pills-rounded-vertical.component.html',
    styleUrls: ['./pills-rounded-vertical.component.scss']
})

export class PillsRoundedVerticalComponent implements OnInit {
    
    @Input() pills: PillOption[] = [];
    @Input() idPillActivated: number = 1;
    @Input() colorBorder: string = "#ddd";
    @Input() bgColor: string = "orange";
    @Input() bgColorHover: string = "orangered";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";
    
    @Output() pillClicked: EventEmitter<number> = new EventEmitter<number>();

    constructor(){

    }

    ngOnInit(): void {
        
    }

    triggerBtn(item: PillOption): void {
        if(item.disable) return;
        this.inactiveAll();
        this.setActiveById(item.id);
        this.pillClicked.emit(item.id);
    }
    
    private inactiveAll(): void {
        for(let i = 0; i < this.pills.length; i++){
            this.pills[i].active = false;
        }
    }

    private setActiveById(id: number): void {
        for(let i = 0; i < this.pills.length; i++){
            if(this.pills[i].id == id){
                this.pills[i].active = true;
                break;
            }
        }
    }

}