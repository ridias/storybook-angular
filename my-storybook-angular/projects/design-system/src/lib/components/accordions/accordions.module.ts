import { NgModule } from "@angular/core";
import { AccordionComponent } from "./accordion/accordion.component";
import { CommonModule } from "@angular/common";
import { AccordionIconComponent } from "./accordion-icon/accordion-icon.component";

@NgModule({  
    declarations: [
        AccordionComponent,
        AccordionIconComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AccordionComponent,
        AccordionIconComponent
    ]
})

export class AccordionsModule {}