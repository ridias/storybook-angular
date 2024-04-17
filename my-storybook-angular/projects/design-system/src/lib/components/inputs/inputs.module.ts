import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputComplexComponent } from "./input-complex/input-complex.component";
import { InputSearchComponent } from "./input-search/input-search.component";
import { InputSimpleComponent } from "./input-simple/input-simple.component";
import { FormsModule } from "@angular/forms";
import { InputColorPickerComponent } from "./input-colorpicker/input-colorpicker.component";

@NgModule({  
    declarations: [
        InputColorPickerComponent,
        InputComplexComponent,
        InputSearchComponent,
        InputSimpleComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputColorPickerComponent,
        InputComplexComponent,
        InputSearchComponent,
        InputSimpleComponent
    ]
})

export class InputsModule {}