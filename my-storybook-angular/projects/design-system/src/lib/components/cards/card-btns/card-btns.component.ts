import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PillOption } from "../../../models/PillOption";

@Component({
    selector: 'app-card-btns',
    templateUrl: './card-btns.component.html',
    styleUrls: ['./card-btns.component.scss']
})

export class CardBtnsComponent implements OnInit {
    
    @Input() itemsBtns: PillOption[] = [];
    @Input() titleCard: string = "Title card";
    @Input() idBtnSelected: number = 1;
    @Input() bgColor: string = "white";
    @Input() colorBorder: string = "#ddd";
    @Input() color: string = "black";
    @Input() colorActive: string = "white";
    @Input() bgColorBtn: string = "#fff";
    @Input() bgColorBtnActive: string = "#ddd";


    @Output() btnClicked: EventEmitter<number> = new EventEmitter<number>(); 

    constructor(){
        
    }

    ngOnInit(): void {
        
    }

    triggerBtn(idBtn: number): void {
        this.inactiveAll();
        this.setActiveById(idBtn)
        this.btnClicked.emit(idBtn);
    }

    private inactiveAll(): void {
        for(let i = 0; i < this.itemsBtns.length; i++){
            this.itemsBtns[i].active = false;
        }
    }

    private setActiveById(id: number): void {
        for(let i = 0; i < this.itemsBtns.length; i++){
            if(this.itemsBtns[i].id == id){
                this.itemsBtns[i].active = true;
                break;
            }
        }
    }
}