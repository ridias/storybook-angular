import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListItemTimeComponent } from "./list-item-time/list-item-time.component";
import { ListItemCalendarComponent } from "./list-item-calendar/list-item-calendar.component";

@NgModule({  
    declarations: [
        ListItemCalendarComponent,
        ListItemTimeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListItemCalendarComponent,
        ListItemTimeComponent
    ]
})

export class ListItemsModule {}