import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckboxSelectorComponent } from "./checkbox-selector/checkbox-selector.component";
import { CheckboxSelectorSMComponent } from "./checkbox-selector-sm/checkbox-selector-sm.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { GroupCheckboxesComponent } from "./group-checkboxes/group-checkboxes.component";
import { GroupCheckboxesVerticalComponent } from "./group-checkboxes-vertical/group-checkboxes-vertical.component";

@NgModule({  
    declarations: [
        CheckboxComponent,
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent,
        GroupCheckboxesComponent,
        GroupCheckboxesVerticalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CheckboxComponent,
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent,
        GroupCheckboxesComponent,
        GroupCheckboxesVerticalComponent
    ]
})

export class CheckboxesModule {}