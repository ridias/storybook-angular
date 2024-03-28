import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-card-total-bar',
    templateUrl: './card-total-bar.component.html',
    styleUrls: ['./card-total-bar.component.scss'],
})

export class CardTotalBarComponent implements OnInit, OnChanges {
    
    @Input() min: number = 0;
    @Input() max: number = 1000;
    @Input() currentValue: string = "0";
    @Input() compareValue: number = 0;
    @Input() titleComponent: string = "Title";
    @Input() subtitle: string = "Subtitle";
    @Input() colorTitle: string = "black";
    @Input() colorSubtitle: string = "grey";
    @Input() colorFilled: string = "purple";
    @Input() bgColorWindow: string = "purple";
    @Input() isLoading: boolean = false;
    @Input() isLoadingColor: string = "black";
    @Input() bgColor: string = "white";
    @Input() bgColorBar: string = "#ccc";
    @Input() colorWindow: string = "white";

    positionMiniLineInPercentage: number = 50;
    positionWindowPercentage: number = 50;
    marginPositionWindowPercentage: number = 0;
    filledBarInPercentage: number = 50;
    isToolTip: boolean = true;

    constructor(){

    }
    
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
        this.filledBarInPercentage = parseInt(this.currentValue) * 100 / this.max;
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