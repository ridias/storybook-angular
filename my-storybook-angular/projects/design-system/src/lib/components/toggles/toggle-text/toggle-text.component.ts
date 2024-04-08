import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-toggle-text',
  templateUrl: './toggle-text.component.html',
  styleUrls: ['./toggle-text.component.scss'],
})

export class ToggleTextComponent implements OnInit {

    @Input() colorDisable: string = "#EEE";
    @Input() colorChecked: string = "orange";
    @Input() colorUnchecked: string = "#EEE";
    @Input() bgcolor: string = "grey";
    @Input() active: boolean = false;
    @Input() disabled: boolean = false;
    @Input() textActive: string = "On";
    @Input() textInactive: string = "Off";
    @Input() color: string = "black";
    
    @Output("changeToggle") changeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    textValue: string = "";

    constructor(){
        
    }
    
    ngOnInit(): void {
        this.textValue = this.active ? this.textActive : this.textInactive;
    }

    changeActive(): void {
        if(!this.disabled){
            this.active = !this.active;
            this.setTextValue();
            this.changeToggle.emit(this.active);
        }
    }

    private setTextValue(): void {
        this.textValue = this.active ? this.textActive : this.textInactive;
    }
}