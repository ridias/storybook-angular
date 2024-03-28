import { NgModule } from "@angular/core";
import { TabsIconsComponent } from "./tabs-icons/tabs-icons.component";
import { TabsIconsRoundedComponent } from "./tabs-icons-rounded/tabs-icons-rounded.component";
import { TabsIconsRoundedVerticalComponent } from "./tabs-icons-rounded-vertical/tabs-icons-rounded-vertical.component";
import { TabsIconsVerticalComponent } from "./tabs-icons-vertical/tabs-icons-vertical.component";
import { TabsSimpleComponent } from "./tabs-simple/tabs-simple.component";
import { TabsSimpleRoundedComponent } from "./tabs-simple-rounded/tabs-simple-rounded.component";
import { TabsSimpleRoundedVerticalComponent } from "./tabs-simple-rounded-vertical/tabs-simple-rounded-vertical.component";
import { TabsSimpleVerticalComponent } from "./tabs-simple-vertical/tabs-simple-vertical.component";
import { CommonModule } from "@angular/common";

@NgModule({  
    declarations: [
        TabsIconsComponent,
        TabsIconsRoundedComponent,
        TabsIconsRoundedVerticalComponent,
        TabsIconsVerticalComponent,
        TabsSimpleComponent,
        TabsSimpleRoundedComponent,
        TabsSimpleRoundedVerticalComponent,
        TabsSimpleVerticalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TabsIconsComponent,
        TabsIconsRoundedComponent,
        TabsIconsRoundedVerticalComponent,
        TabsIconsVerticalComponent,
        TabsSimpleComponent,
        TabsSimpleRoundedComponent,
        TabsSimpleRoundedVerticalComponent,
        TabsSimpleVerticalComponent
    ]
})

export class TabsModule {}