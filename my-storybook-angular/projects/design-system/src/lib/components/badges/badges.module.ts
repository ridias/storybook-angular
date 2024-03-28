import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BadgeComponent } from "./badge/badge.component";
import { BadgeIconComponent } from "./badge-icon/badge-icon.component";
import { BadgeRoundedComponent } from "./badge-rounded/badge-rounded.component";

@NgModule({  
    declarations: [
        BadgeComponent,
        BadgeIconComponent,
        BadgeRoundedComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BadgeComponent,
        BadgeIconComponent,
        BadgeRoundedComponent
    ]
})

export class BadgesModule {}