import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PillOption } from "../../../models/PillOption";

@Component({
    selector: 'app-pills-rect-vertical',
    templateUrl: './pills-rect-vertical.component.html',
    styleUrls: ['./pills-rect-vertical.component.scss']
})

export class PillsRectVerticalComponent implements OnInit {
    
    @Input() pills: PillOption[] = [];
    @Input() idPillActivated: number = 1;
    @Input() colorBorder: string = "#ddd";
    @Input() bgColor: string = "orange";
    @Input() bgColorHover: string = "orangered";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";
    
    @Output() pillClicked: EventEmitter<PillOption> = new EventEmitter<PillOption>();

    constructor(){

    }

    ngOnInit(): void {
        
    }

    triggerBtn(item: PillOption): void {
        if(item.disable) return;
        if(item.id == this.idPillActivated) return;
        this.inactiveAll();
        this.setActiveById(item.id);
        this.pillClicked.emit(item);
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