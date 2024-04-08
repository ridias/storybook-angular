import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button/button.component";
import { ButtonIconComponent } from "./button-icon/button-icon.component";
import { ButtonIconRoundedComponent } from "./button-icon-rounded/button-icon-rounded.component";
import { ButtonIconTextComponent } from "./button-icon-text/button-icon-text.component";

@NgModule({  
    declarations: [
        ButtonComponent,
        ButtonIconComponent,
        ButtonIconRoundedComponent,
        ButtonIconTextComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ButtonComponent,
        ButtonIconComponent,
        ButtonIconRoundedComponent,
        ButtonIconTextComponent
    ]
})

export class ButtonsModule {}