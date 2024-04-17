import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuVerticalComponent } from "./menu-vertical/menu-vertical.component";

@NgModule({  
    declarations: [
        MenuVerticalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MenuVerticalComponent
    ]
})

export class MenusModule {}