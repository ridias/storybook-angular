import { NgModule } from "@angular/core";
import { TimepickerComponent } from "./timerpicker/timepicker.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({  
    declarations: [
        TimepickerComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        TimepickerComponent
    ]
})

export class TimepickersModule {}