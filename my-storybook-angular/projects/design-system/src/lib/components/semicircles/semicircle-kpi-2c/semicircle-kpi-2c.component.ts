import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-semicircle-kpi-2c',
    templateUrl: './semicircle-kpi-2c.component.html',
    styleUrls: ['./semicircle-kpi-2c.component.scss']
})

export class SemicircleKpi2cComponent implements OnInit {
    
    @Input() widthPx: number = 160;
    @Input() heightPx: number = 80;
    @Input() borderPx: number = 25;
    @Input() currentDeg: number = 0;
    @Input() description: string = "";
    @Input() isLoading: number = 0;
    @Input() iconArrowLeftPercentage: number = 47;
    @Input() borderBottomWidth: number = 75;
    @Input() colorLeft: string = "#4FBF9D";
    @Input() colorRight: string = "#EB895F";
    @Input() colorArrow: string = "var(--color-font-primary)";
    
    ngOnInit(): void {
        
    }

}