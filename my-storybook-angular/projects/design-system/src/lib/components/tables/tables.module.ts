import { NgModule } from "@angular/core";
import { TableSimpleComponent } from "./table-simple/table-simple.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SortableHeaderDirective } from "../../directives/sortable.directive";
import { TableEmptyComponent } from "./table-empty/table-empty.component";

@NgModule({  
    declarations: [
        TableEmptyComponent,
        TableSimpleComponent,
        SortableHeaderDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        TableEmptyComponent,
        TableSimpleComponent,
    ]
})

export class TablesModule {}