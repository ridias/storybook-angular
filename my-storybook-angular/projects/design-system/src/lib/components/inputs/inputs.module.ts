import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component";
import { InputComplexComponent } from "./input-complex/input-complex.component";
import { InputRadioButtonComponent } from "./input-radiobutton/input-radiobutton.component";
import { InputSearchComponent } from "./input-search/input-search.component";
import { InputSimpleComponent } from "./input-simple/input-simple.component";
import { FormsModule } from "@angular/forms";
import { InputColorPickerComponent } from "./input-colorpicker/input-colorpicker.component";

@NgModule({  
    declarations: [
        InputCheckboxComponent,
        InputColorPickerComponent,
        InputComplexComponent,
        InputRadioButtonComponent,
        InputSearchComponent,
        InputSimpleComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputCheckboxComponent,
        InputColorPickerComponent,
        InputComplexComponent,
        InputRadioButtonComponent,
        InputSearchComponent,
        InputSimpleComponent
    ]
})

export class InputsModule {}