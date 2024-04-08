import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputCheckboxComponent } from "./input-checkbox/input-checkbox.component";
import { InputComplexComponent } from "./input-complex/input-complex.component";
import { InputMultipleItemsComponent } from "./input-multiple-items/input-multiple-items.component";
import { InputRadioButtonComponent } from "./input-radiobutton/input-radiobutton.component";
import { InputSearchComponent } from "./input-search/input-search.component";
import { InputSimpleComponent } from "./input-simple/input-simple.component";
import { SelectSearchComponent } from "./select-search/select-search.component";
import { FormsModule } from "@angular/forms";
import { InputColorPickerComponent } from "./input-colorpicker/input-colorpicker.component";

@NgModule({  
    declarations: [
        InputCheckboxComponent,
        InputColorPickerComponent,
        InputComplexComponent,
        InputMultipleItemsComponent,
        InputRadioButtonComponent,
        InputSearchComponent,
        InputSimpleComponent,
        SelectSearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        InputCheckboxComponent,
        InputColorPickerComponent,
        InputComplexComponent,
        InputMultipleItemsComponent,
        InputRadioButtonComponent,
        InputSearchComponent,
        InputSimpleComponent,
        SelectSearchComponent
    ]
})

export class InputsModule {}