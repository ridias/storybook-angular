import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-slider-double-range',
    templateUrl: './slider-double-range.component.html',
    styleUrls: ['./slider-double-range.component.scss']
})

export class SliderDoubleRangeComponent implements OnInit {
    
    @Input() leftValue: number = 0;
    @Input() rightValue: number = 0;
    @Input() minValue: number = 0;
    @Input() maxValue: number = 0;
    @Input() bgcolor: string = "#ccc";
    @Input() colorSliderThumb: string = "orange";
    @Input() colorRangeThumb: string = "orange";
    @Input() colorThumbHover: string = "rgba(255,85,0, .1)";
    @Input() colorThumbActiveFocus: string = "rgba(255,85,0, .2)";
    @Input() color: string = "black";

    @Output() valueChanged: EventEmitter<number[]> = new EventEmitter<number[]>();

    ngOnInit(): void {
        
    }

    setValue(): void {
        this.valueChanged.emit([this.leftValue, this.rightValue]);
    }
}