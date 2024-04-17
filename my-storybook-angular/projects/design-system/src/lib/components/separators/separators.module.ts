import { CommonModule } from "@angular/common";
import { SeparatorHorizontalComponent } from "./separator-horizontal/separator-horizontal.component";
import { NgModule } from "@angular/core";
import { SeparatorVerticalComponent } from "./separator-vertical/separator-vertical.component";

@NgModule({  
    declarations: [
        SeparatorHorizontalComponent,
        SeparatorVerticalComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SeparatorHorizontalComponent,
        SeparatorVerticalComponent
    ]
})

export class SeparatorsModule {}