import { Component, Input, OnInit } from "@angular/core";
import { TopItem } from "../../../models/TopItem";

@Component({
    selector: 'app-card-top-ranking',
    templateUrl: './card-top-ranking.component.html',
    styleUrls: ['./card-top-ranking.component.scss'],
})

export class CardTopRankingComponent implements OnInit {
    
    @Input() values: TopItem[] = [];
    @Input() isLoading: boolean = false;
    @Input() isLoadingColor: string = "black";
    @Input() titleValue: string = "Title";
    @Input() subtitleValue: string = "Subtitle";
    @Input() emptyValue: string = "Empty!";
    @Input() colorIcon: string = "black";
    
    ngOnInit(): void {
        
    }
}