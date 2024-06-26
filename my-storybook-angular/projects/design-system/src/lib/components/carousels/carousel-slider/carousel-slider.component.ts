import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Slide } from "../../../models/Slide";

@Component({
    selector: 'app-carousel-slider',
    templateUrl: './carousel-slider.component.html',
    styleUrls: ['./carousel-slider.component.scss']
})

export class CarouselSliderComponent implements OnInit {
    
    @Input() sliders: Slide[] = [];
    @Input() bgColorBtn: string = "rgba(0, 0, 0, 0.5)";
    @Input() bgColorHoverBtn: string = "rgba(0, 0, 0, 0.7)";
    @Input() color: string = "white"
    @Input() colorIcon: string = "white";
    @Input() colorHoverIcon: string = "white";
    
    @Output() prevClicked: EventEmitter<Slide> = new EventEmitter<Slide>();
    @Output() nextClicked: EventEmitter<Slide> = new EventEmitter<Slide>();
    
    currentIndex: number = 0;

    constructor(){

    }
    
    ngOnInit(): void {
        
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