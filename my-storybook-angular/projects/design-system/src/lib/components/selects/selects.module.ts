import { NgModule } from "@angular/core";
import { SelectMultipleItemsComponent } from "./select-multiple-items/select-multiple-items.component";
import { SelectSearchComponent } from "./select-search/select-search.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SelectComponent } from "./select/select.component";

@NgModule({  
    declarations: [
        SelectComponent,
        SelectMultipleItemsComponent,
        SelectSearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        SelectComponent,
        SelectMultipleItemsComponent,
        SelectSearchComponent
    ]
})

export class SelectsModule {}