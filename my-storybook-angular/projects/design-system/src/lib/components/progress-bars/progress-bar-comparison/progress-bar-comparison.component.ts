import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-progress-bar-comparison',
    templateUrl: './progress-bar-comparison.component.html',
    styleUrls: ['./progress-bar-comparison.component.scss']
  })
  export class ProgressBarComparisonComponent implements OnInit {
  
    @Input() width: string = "100%";
    @Input() height: string = "40px";
    @Input() descriptionLeft: string = "";
    @Input() descriptionRight: string = ""; 
    @Input() percentageLeft: string = "0";
    @Input() percentageRight: string = "0";
    @Input() valueLeft: string = "0";
    @Input() valueRight: string = "0";
    @Input() colorFillLeft: string = "#0298B3";
    @Input() colorFillRight: string = "#CDC9C6";
    @Input() color: string = "black";
  
    constructor() { 
      
    }
  
    ngOnInit(): void {
      
    }
  
  }
  