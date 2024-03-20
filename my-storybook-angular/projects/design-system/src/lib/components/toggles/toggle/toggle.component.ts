import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})

export class ToggleComponent implements OnInit {

    @Input() colorDisable: string = "#EEE";
    @Input() colorChecked: string = "orange";
    @Input() colorUnchecked: string = "#EEE";
    @Input() bgcolor: string = "grey";
    @Input() active: boolean = false;
    @Input() disabled: boolean = false;
    
    @Output("changeToggle") changeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(){
        
    }
    
    ngOnInit(): void {
        
    }

    changeActive(): void {
        if(!this.disabled){
            this.active = !this.active;
            this.changeToggle.emit(this.active);
        }
    }
}