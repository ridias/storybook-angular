import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-list-item-time',
    templateUrl: './list-item-time.component.html',
    styleUrls: ['./list-item-time.component.scss']
})

export class ListItemTimeComponent implements OnInit {
    
    @Input() time: string = "Just now"
    @Input() description: string = "Description";
    @Input() color: string = "#444";
    @Input() colorTime: string = "grey";
    @Input() fontSizeDescription: number = 16;
    @Input() fontSizeTime: number = 14;

    ngOnInit(): void {
        
    }

}