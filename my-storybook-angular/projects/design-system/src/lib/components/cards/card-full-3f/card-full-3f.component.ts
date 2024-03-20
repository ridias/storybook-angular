import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card-full-3f',
    templateUrl: './card-full-3f.component.html',
    styleUrls: ['./card-full-3f.component.scss'],
})
  
export class CardFull3fComponent implements OnInit {
    
    @Input() valueMain: string = "Main value";
    @Input() value: string = "Sub value";
    @Input() description: string = "Description";
    @Input() bgColor: string = "#37C9F0";
    @Input() colorValueMain: string = "#FFFFFF";
    @Input() colorValue: string = "#FFFFFF";
    @Input() colorDescription: string = "#FFFFFF";
    @Input() isLoading: boolean = false;
    @Input() isLoadingColor: string = "white";

    ngOnInit(): void {
        
    }

    constructor(){
        
    }

}