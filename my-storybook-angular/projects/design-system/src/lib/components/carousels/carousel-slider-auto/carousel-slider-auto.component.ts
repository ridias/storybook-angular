import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Slide } from "../../../models/Slide";

@Component({
    selector: 'app-carousel-slider-auto',
    templateUrl: './carousel-slider-auto.component.html',
    styleUrls: ['./carousel-slider-auto.component.scss']
})

export class CarouselSliderAutoComponent implements OnInit, OnDestroy {
    
    @Input() sliders: Slide[] = [];
    @Input() bgColorBtn: string = "rgba(0, 0, 0, 0.5)";
    @Input() bgColorHoverBtn: string = "rgba(0, 0, 0, 0.7)";
    @Input() color: string = "white"
    @Input() colorIcon: string = "white";
    @Input() colorHoverIcon: string = "white";
    @Input() secondsNextSlide: number = 5;
    
    @Output() prevClicked: EventEmitter<Slide> = new EventEmitter<Slide>();
    @Output() nextClicked: EventEmitter<Slide> = new EventEmitter<Slide>();

    intervalId: any = null;
    currentIndex: number = 0;

    constructor(){

    }
    ngOnDestroy(): void {
        if(this.intervalId != null){
            clearInterval(this.intervalId);
        }
    }
    
    ngOnInit(): void {
        this.intervalId = setInterval(() => this.next(), this.secondsNextSlide * 1000)
    }

    next(): void {
        if(this.currentIndex + 1 >= this.sliders.length){
            this.currentIndex = 0;
        }else{
            this.currentIndex += 1;
        }

        this.nextClicked.emit(this.sliders[this.currentIndex])
    }

    previous(): void {
        if(this.currentIndex - 1 < 0){
            this.currentIndex = this.sliders.length - 1;
        }else{
            this.currentIndex -= 1;
        }

        this.prevClicked.emit(this.sliders[this.currentIndex])
    }

}