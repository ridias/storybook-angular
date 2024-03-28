import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckboxSelectorComponent } from "./checkbox-selector/checkbox-selector.component";
import { CheckboxSelectorSMComponent } from "./checkbox-selector-sm/checkbox-selector-sm.component";

@NgModule({  
    declarations: [
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent
    ]
})

export class CheckboxesModule {}