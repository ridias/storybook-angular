import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-checkbox-selector-sm',
    templateUrl: './checkbox-selector-sm.component.html',
    styleUrls: ['./checkbox-selector-sm.component.scss'],
})

export class CheckboxSelectorSMComponent implements OnInit {
    
    @Input() active: boolean = false;
    @Input() description: string = "Item";
    @Input() bgColor: string = "transparent";
    @Input() bgColorActive: string = "orange";
    @Input() borderColor: string = "#ddd";
    @Input() borderColorActive: string = "orange"
    @Input() colorActive: string = "white";
    @Input() color: string = "black";
    @Input() colorIconActive: string = "white";
    @Input() colorIcon: string = "grey";

    @Output() activeChanged: EventEmitter<any[]> = new EventEmitter<any[]>(); 


    ngOnInit(): void {

    }

    activeOrDesactiveSelector(): void {
        this.active = !this.active;
        this.activeChanged.emit([this.active, this.description])
    }
}