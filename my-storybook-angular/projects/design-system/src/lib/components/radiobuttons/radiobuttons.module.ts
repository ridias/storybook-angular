import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GroupRadiobuttonsComponent } from "./group-radiobuttons/group-radiobuttons.component";
import { GroupRadiobuttonsVerticalComponent } from "./group-radiobuttons-vertical/group-radiobuttons-vertical.component";
import { RadioButtonOptionComponent } from "./radiobutton-option/radiobutton-option.component";

@NgModule({  
    declarations: [
        GroupRadiobuttonsComponent,
        GroupRadiobuttonsVerticalComponent,
        RadioButtonOptionComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        GroupRadiobuttonsComponent,
        GroupRadiobuttonsVerticalComponent,
        RadioButtonOptionComponent
    ]
})

export class RadioButtonsModule {}