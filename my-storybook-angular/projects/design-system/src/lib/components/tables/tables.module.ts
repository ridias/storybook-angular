import { NgModule } from "@angular/core";
import { TableSimpleComponent } from "./table-simple/table-simple.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SortableHeaderDirective } from "../../directives/sortable.directive";

@NgModule({  
    declarations: [
        TableSimpleComponent,
        SortableHeaderDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        TableSimpleComponent,
    ]
})

export class TablesModule {}