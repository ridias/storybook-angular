import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-list-item-calendar',
    templateUrl: './list-item-calendar.component.html',
    styleUrls: ['./list-item-calendar.component.scss']
})

export class ListItemCalendarComponent implements OnInit {
    
    @Input() minTime: string = "08:00";
    @Input() maxTime: string = "16:00"
    @Input() date: string = "";
    @Input() description: string = "Description";
    @Input() color: string = "#444";
    @Input() colorTime: string = "grey";
    @Input() colorCalendar: string = "#444";
    @Input() bgColorCalendar: string = "#ccc"

    ngOnInit(): void {
        
    }

}