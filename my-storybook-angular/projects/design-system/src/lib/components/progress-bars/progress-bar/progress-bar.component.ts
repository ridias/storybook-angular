import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent implements OnInit {

    @Input() height: string = "20px"
    @Input() width: string = "100%"
    @Input() value: number = 50;
    @Input() maxValue: number = 100;
    @Input() colorBar: string = "#eee";
    @Input() colorFillBar: string = "purple"; 
    
    ngOnInit(): void {
        
    }
}