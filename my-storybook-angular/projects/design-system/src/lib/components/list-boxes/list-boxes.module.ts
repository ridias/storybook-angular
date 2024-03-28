import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListBoxCheckboxesComponent } from "./list-box-checkboxes/list-box-checkboxes.component";
import { ListBoxRadioButtonsComponent } from "./list-box-radiobuttons/list-box-radiobuttons.component";
import { ListCheckboxesComponent } from "./list-checkboxes/list-checkboxes.component";
import { FormsModule } from "@angular/forms";

@NgModule({  
    declarations: [
        ListBoxCheckboxesComponent,
        ListBoxRadioButtonsComponent,
        ListCheckboxesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ListBoxCheckboxesComponent,
        ListBoxRadioButtonsComponent,
        ListCheckboxesComponent
    ]
})

export class ListBoxesModule {}