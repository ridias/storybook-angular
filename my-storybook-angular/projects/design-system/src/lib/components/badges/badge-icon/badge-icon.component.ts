import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-badge-icon',
    templateUrl: './badge-icon.component.html',
    styleUrls: ['./badge-icon.component.scss']
})
  
export class BadgeIconComponent implements OnInit {

    @Input() text: string = "";
    @Input() size: number = 16;
    @Input() bgcolor: string = "black";
    @Input() color: string = "white";
    @Input() icon: string = "bi bi-person";
    @Input() iconSize: 'extra-sm' | 'sm' | 'md' | 'lg' | 'extra-lg' = "md";

    ngOnInit(): void {
        
    }

    public get iconClass(): string {
        return "general-icon-" + this.iconSize + " " + this.icon;
    }
}