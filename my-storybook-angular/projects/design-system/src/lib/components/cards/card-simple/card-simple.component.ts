import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card-simple',
    templateUrl: './card-simple.component.html',
    styleUrls: ['./card-simple.component.scss']
})

export class CardSimpleComponent implements OnInit {
    
    @Input() titleCard: string = "Title card";
    @Input() bgColor: string = "white";
    @Input() colorBorder: string = "#ddd";
    @Input() color: string = "black";

    constructor(){

    }
    
    ngOnInit(): void {
        
    }

}