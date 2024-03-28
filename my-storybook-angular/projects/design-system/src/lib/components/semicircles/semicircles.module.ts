import { NgModule } from "@angular/core";
import { SemicircleKpi2cComponent } from "./semicircle-kpi-2c/semicircle-kpi-2c.component";
import { CommonModule } from "@angular/common";

@NgModule({  
    declarations: [
        SemicircleKpi2cComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SemicircleKpi2cComponent
    ]
})

export class SemicirclesModule {}