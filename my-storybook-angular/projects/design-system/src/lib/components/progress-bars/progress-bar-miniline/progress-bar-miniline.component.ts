import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-progress-bar-miniline',
    templateUrl: './progress-bar-miniline.component.html',
    styleUrls: ['./progress-bar-miniline.component.scss'],
})

export class ProgressBarMinilineComponent implements OnInit, OnChanges {
    
    @Input() width: string = "100%";
    @Input() height: string = "20px";
    @Input() min: number = 0;
    @Input() max: number = 1000;
    @Input() value: number = 500;
    @Input() compareValue: number = 0;
    @Input() compareValueStr: string = "0";
    @Input() colorFilled: string = "#CDC9C6";
    @Input() colorBar: string = "#eee";
    @Input() colorMiniLine: string = "#CDC9C6";
    @Input() colorCompareValue: string = "black";
    @Input() showCompareValue: boolean = true;
    @Input() fontSizeCompareValue: number = 24;
    @Input() marginTopCompareValue: number = 35;
    @Input() fontWeight: number = 400;
    @Input() fontFamily: string = "Arial";
    @Input() topCompareValue: string = "150%";

    positionMiniLineInPercentage: number = 50;
    filledBarInPercentage: number = 50;

    ngOnInit(): void {
        this.recalculate();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.recalculate();
    }

    recalculate(): void {
        if(this.max == 0) this.max = 1000;
        this.positionMiniLineInPercentage = this.compareValue * 100 / this.max
        if(this.positionMiniLineInPercentage > 100) this.positionMiniLineInPercentage = 100;
        if(this.positionMiniLineInPercentage < 0) this.positionMiniLineInPercentage = 0;
        this.filledBarInPercentage = this.value * 100 / this.max;
        if(this.filledBarInPercentage > 100) this.filledBarInPercentage = 100;
        if(this.filledBarInPercentage < 0) this.filledBarInPercentage = 0;
    }
}