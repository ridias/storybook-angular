import { NgModule } from "@angular/core";
import { TextComponent } from "./text/text.component";
import { TextRealDatetimeComponent } from "./text-real-datetime/text-real-datetime.component";
import { CommonModule } from "@angular/common";

@NgModule({  
    declarations: [
        TextComponent,
        TextRealDatetimeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TextComponent,
        TextRealDatetimeComponent
    ]
})

export class TextsModule {}