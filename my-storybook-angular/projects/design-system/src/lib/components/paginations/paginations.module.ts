import { NgModule } from "@angular/core";
import { PaginationComponent } from "./pagination/pagination.component";
import { PaginationSimpleComponent } from "./pagination-simple/pagination-simple.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({  
    declarations: [
        PaginationComponent,
        PaginationSimpleComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        PaginationComponent,
        PaginationSimpleComponent
    ]
})

export class PaginationsModule {}