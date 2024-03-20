import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card-simple-title-subtitle-center',
    templateUrl: './card-simple-title-subtitle-center.component.html',
    styleUrls: ['./card-simple-title-subtitle-center.component.scss']
})

export class CardSimpleTitleSubtitleCenterComponent implements OnInit {
    
    @Input() titleCard: string = "";
    @Input() subtitleCard: string = "";
    @Input() fontSizeTitle: number = 24;
    @Input() fontSizeSubtitle: number = 16;
    @Input() fontSizeIcon: number = 28;
    @Input() icon: string = "";
    @Input() iconColor: string = "";
    @Input() iconTop: string = "10%";
    @Input() iconLeft: string = "5%";
    @Input() headerBorderBottomWidthPx: number = 0;
    @Input() bgColor: string = "var(--color-onbg-secondary)"
    @Input() borderColor: string = "none";
    @Input() borderWidth: number = 0;
    @Input() borderStyle: string = "none";

    constructor(){

    }
    
    ngOnInit(): void {
        
    }

}