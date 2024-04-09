import { NgModule } from "@angular/core";
import { CarouselSliderComponent } from "./carousel-slider/carousel-slider.component";
import { CommonModule } from "@angular/common";
import { CarouselSliderAutoComponent } from "./carousel-slider-auto/carousel-slider-auto.component";

@NgModule({  
    declarations: [
        CarouselSliderComponent,
        CarouselSliderAutoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CarouselSliderComponent,
        CarouselSliderAutoComponent
    ]
})

export class CarouselsModule {}