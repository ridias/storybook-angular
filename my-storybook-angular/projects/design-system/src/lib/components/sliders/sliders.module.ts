import { CommonModule } from "@angular/common";
import { SliderComponent } from "./slider/slider.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@NgModule({  
    declarations: [
        SliderComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        SliderComponent
    ]
})

export class SlidersModule {}