import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
  
export class TextComponent implements OnInit {

    @Input() value: string = "Text";
    @Input() size: string = "28px";
    @Input() color: string = "black";

    ngOnInit(): void {
        
    }

}