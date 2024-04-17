import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-menu-vertical',
    templateUrl: './menu-vertical.component.html',
    styleUrls: ['./menu-vertical.component.scss']
})
  
export class MenuVerticalComponent implements OnInit {
    
    @Input() mainImg: string = "";
    @Input() mainImgWidth: string = "100px";
    @Input() mainImgHeight: string = "50px";
    @Input() logoImg: string = "";
    @Input() logoImgWidth: string = "75px";
    @Input() logoImgHeight: string = "50px";

    @Input() isHover: boolean = false;

    ngOnInit(): void {
        
    }
    
}

