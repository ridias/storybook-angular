import { NgModule } from "@angular/core";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ProgressBarComparisonComponent } from "./progress-bar-comparison/progress-bar-comparison.component";
import { ProgressBarMinilineComponent } from "./progress-bar-miniline/progress-bar-miniline.component";
import { ProgressBarMinilineWindowComponent } from "./progress-bar-miniline-window/progress-bar-miniline-window.component";
import { CommonModule } from "@angular/common";

@NgModule({  
    declarations: [
        ProgressBarComponent,
        ProgressBarComparisonComponent,
        ProgressBarMinilineComponent,
        ProgressBarMinilineWindowComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ProgressBarComponent,
        ProgressBarComparisonComponent,
        ProgressBarMinilineComponent,
        ProgressBarMinilineWindowComponent
    ]
})

export class ProgressBarsModule {}