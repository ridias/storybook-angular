import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card-full-2f',
    templateUrl: './card-full-2f.component.html',
    styleUrls: ['./card-full-2f.component.scss'],
})
  
export class CardFull2fComponent implements OnInit {

    @Input() value: string = "Value"
    @Input() description: string = "Description"
    @Input() bgColor: string = "#37C9F0"
    @Input() colorValue: string = "#FFFFFF";
    @Input() colorDescription: string = "#FFFFFF";
    @Input() isLoading: boolean = false;
    @Input() isLoadingColor: string = "white";
    
    constructor() {

    }

    ngOnInit(): void {
        
    }
}