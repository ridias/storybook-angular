import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-badge-rounded',
    templateUrl: './badge-rounded.component.html',
    styleUrls: ['./badge-rounded.component.scss']
})
  
export class BadgeRoundedComponent implements OnInit {

    @Input() text: string = "";
    @Input() size: number = 16;
    @Input() bgcolor: string = "black";
    @Input() color: string = "white";

    ngOnInit(): void {
        
    }
}