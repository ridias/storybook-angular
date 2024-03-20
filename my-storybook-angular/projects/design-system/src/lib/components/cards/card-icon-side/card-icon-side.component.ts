import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card-icon-side',
    templateUrl: './card-icon-side.component.html',
    styleUrls: ['./card-icon-side.component.scss']
})

export class CardIconSideComponent implements OnInit {
    
    @Input() titleCard: string = "Title card";
    @Input() icon: string = "bi bi-funnel-fill";
    @Input() iconSize: 'extra-sm' | 'sm' | 'md' | 'lg' | 'extra-lg' = "md"
    @Input() iconColor: string = "black";
    @Input() headerBorderBottomWidthPx: number = 0;
    @Input() borderColor: string = "#ddd";
    @Input() fontSizeTitle: number = 16;
    @Input() fontSizeIcon: number = 16;
    @Input() bgColor: string = "white";
    @Input() marginTopIcon: number = 0;
    @Input() color: string = "black";

    constructor(){
        
    }

    ngOnInit(): void {
        
    }

    public get iconClass(): string {
        return "general-icon-" + this.iconSize + " " + this.icon;
    }

}