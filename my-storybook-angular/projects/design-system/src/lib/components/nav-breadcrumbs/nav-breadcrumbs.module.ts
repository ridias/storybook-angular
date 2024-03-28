import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavBreadcrumbComponent } from "./nav-breadcrumb/nav-breadcrumb.component";

@NgModule({  
    declarations: [
        NavBreadcrumbComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavBreadcrumbComponent
    ]
})

export class NavBreadcurmbsModule {}