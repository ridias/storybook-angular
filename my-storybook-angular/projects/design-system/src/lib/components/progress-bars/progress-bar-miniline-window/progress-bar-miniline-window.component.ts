import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-progress-bar-miniline-window',
    templateUrl: './progress-bar-miniline-window.component.html',
    styleUrls: ['./progress-bar-miniline-window.component.scss'],
})

export class ProgressBarMinilineWindowComponent implements OnInit, OnChanges {
    
    @Input() width: string = "100%";
    @Input() height: string = "20px";
    @Input() min: number = 0;
    @Input() max: number = 1000;
    @Input() value: number = 500;
    @Input() compareValue: number = 500;
    @Input() titleToolTip: string = "";
    @Input() colorFilled: string = "#CDC9C6";
    @Input() colorBar: string = "#eee"
    @Input() colorMiniLine: string = "#CDC9C6";
    @Input() topLine: string = "-10px"
    @Input() topWindow: string = "100%";

    positionMiniLineInPercentage: number = 50;
    positionWindowPercentage: number = 50;
    marginPositionWindowPercentage: number = 0;
    filledBarInPercentage: number = 50;
    isToolTip: boolean = true;

    ngOnChanges(changes: SimpleChanges): void {
        this.recalculate();
    }

    ngOnInit(): void {
        this.recalculate();
    }

    recalculate(): void {
        this.isToolTip = false;
        if(this.max == 0) this.max = 1000;
        //this.max = Math.max(this.compareValue * 1.10, parseInt(this.currentValue));

        this.positionMiniLineInPercentage = this.compareValue * 100 / this.max
        if(this.positionMiniLineInPercentage > 100) this.positionMiniLineInPercentage = 100;
        if(this.positionMiniLineInPercentage < 0) this.positionMiniLineInPercentage = 0;
        this.filledBarInPercentage = this.value * 100 / this.max;
        if(this.filledBarInPercentage > 100) this.filledBarInPercentage = 100;
        if(this.filledBarInPercentage < 0) this.filledBarInPercentage = 0;

        let lengthCompareValue = this.compareValue.toString().length;
        if(lengthCompareValue == 7){
            this.marginPositionWindowPercentage = 7.5
        }else if(lengthCompareValue == 6){
            this.marginPositionWindowPercentage = 6.5
        }else if(lengthCompareValue == 5){
            this.marginPositionWindowPercentage = 5.5
        }else if(lengthCompareValue == 4){
            this.marginPositionWindowPercentage = 4.5
        }else if(lengthCompareValue == 3){
            this.marginPositionWindowPercentage = 3.5;
        }else if(lengthCompareValue == 2){
            this.marginPositionWindowPercentage = 2.5;
        }else{
            this.marginPositionWindowPercentage = 1.5;
        }

        this.isToolTip = true;
    }

    showToolTip(): void {
        this.isToolTip = true;
    }

    hideToolTip(): void {
        this.isToolTip = false;
    }
}