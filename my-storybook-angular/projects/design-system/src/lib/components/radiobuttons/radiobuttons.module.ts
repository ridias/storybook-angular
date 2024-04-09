import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GroupRadiobuttonsComponent } from "./group-radiobuttons/group-radiobuttons.component";

@NgModule({  
    declarations: [
        GroupRadiobuttonsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        GroupRadiobuttonsComponent
    ]
})

export class RadioButtonsModule {}