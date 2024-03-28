import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PillsRectComponent } from "./pills-rect/pills-rect.component";
import { PillsRectVerticalComponent } from "./pills-rect-vertical/pills-rect-vertical.component";
import { PillsRoundedComponent } from "./pills-rounded/pills-rounded.component";
import { PillsRoundedVerticalComponent } from "./pills-rounded-vertical/pills-rounded-vertical.component";
import { PillsSimpleComponent } from "./pills-simple/pills-simple.component";
import { PillsSimpleVerticalComponent } from "./pills-simple-vertical/pills-simple-vertical.component";

@NgModule({  
    declarations: [
        PillsRectComponent,
        PillsRectVerticalComponent,
        PillsRoundedComponent,
        PillsRoundedVerticalComponent,
        PillsSimpleComponent,
        PillsSimpleVerticalComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PillsRectComponent,
        PillsRectVerticalComponent,
        PillsRoundedComponent,
        PillsRoundedVerticalComponent,
        PillsSimpleComponent,
        PillsSimpleVerticalComponent,
    ]
})

export class PillsModule {}