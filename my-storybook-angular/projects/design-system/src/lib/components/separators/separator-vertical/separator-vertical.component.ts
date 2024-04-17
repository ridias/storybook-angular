import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-separator-vertical',
    templateUrl: './separator-vertical.component.html',
    styleUrls: ['./separator-vertical.component.scss']
})
  
export class SeparatorVerticalComponent implements OnInit {
    
    @Input() borderWith: number = 1;
    @Input() borderStyle: string = "solid";
    @Input() borderColor: string = "#ddd";
    @Input() opacity: number = 0.6;

    ngOnInit(): void {
        
    }
}