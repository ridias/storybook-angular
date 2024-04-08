import { NgModule } from "@angular/core";
import { ToggleComponent } from "./toggle/toggle.component";
import { CommonModule } from "@angular/common";
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";
import { ToggleTextComponent } from "./toggle-text/toggle-text.component";

@NgModule({  
    declarations: [
        ToggleComponent,
        ToggleButtonComponent,
        ToggleTextComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ToggleComponent,
        ToggleButtonComponent,
        ToggleTextComponent
    ]
})

export class TogglesModule {}