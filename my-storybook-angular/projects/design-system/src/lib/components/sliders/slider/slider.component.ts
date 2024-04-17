import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
    
    @Input() value: number = 0
    @Input() minValue: number = 0;
    @Input() maxValue: number = 0;
    @Input() steps: number = 1;
    @Input() bgcolor: string = "#ccc";
    @Input() colorSliderThumb: string = "orange";
    @Input() colorRangeThumb: string = "orange";
    @Input() colorThumbHover: string = "rgba(255,85,0, .1)";
    @Input() colorThumbActiveFocus: string = "rgba(255,85,0, .2)";
    @Input() color: string = "black";

    @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        
    }

    setValue(): void {
        this.valueChanged.emit(this.value);
    }
}