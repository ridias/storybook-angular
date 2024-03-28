import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { ButtonIconComponent } from "./button-icon/button-icon.component";
import { ButtonIconRoundedComponent } from "./button-icon-rounded/button-icon-rounded.component";

@NgModule({  
    declarations: [
        ButtonComponent,
        ButtonIconComponent,
        ButtonIconRoundedComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ButtonComponent,
        ButtonIconComponent,
        ButtonIconRoundedComponent
    ]
})

export class ButtonsModule {}