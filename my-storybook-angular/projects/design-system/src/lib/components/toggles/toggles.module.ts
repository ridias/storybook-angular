import { NgModule } from "@angular/core";
import { ToggleComponent } from "./toggle/toggle.component";
import { CommonModule } from "@angular/common";
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";

@NgModule({  
    declarations: [
        ToggleComponent,
        ToggleButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ToggleComponent,
        ToggleButtonComponent
    ]
})

export class TogglesModule {}