import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card-simple-title-center',
    templateUrl: './card-simple-title-center.component.html',
    styleUrls: ['./card-simple-title-center.component.scss']
})

export class CardSimpleTitleCenterComponent implements OnInit {
    
    @Input() titleCard: string = "Title card";
    @Input() fontSizeTitle: number = 24;
    @Input() fontSizeIcon: number = 28;
    @Input() icon: string = "";
    @Input() iconColor: string = "";
    @Input() headerBorderBottomWidthPx: number = 0;
    @Input() color: string = "black";
    @Input() bgColor: string = "white";
    @Input() borderColor: string = "none";
    @Input() borderWidth: number = 0;
    @Input() borderStyle: string = "none";

    constructor(){

    }
    
    ngOnInit(): void {
        
    }

}