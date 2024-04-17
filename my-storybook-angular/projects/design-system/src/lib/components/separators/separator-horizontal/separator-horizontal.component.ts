import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-separator-horizontal',
    templateUrl: './separator-horizontal.component.html',
    styleUrls: ['./separator-horizontal.component.scss']
})
  
export class SeparatorHorizontalComponent implements OnInit {
    
    @Input() borderWith: number = 1;
    @Input() borderStyle: string = "solid";
    @Input() borderColor: string = "#ddd";
    @Input() opacity: number = 0.6;

    ngOnInit(): void {
        
    }
}