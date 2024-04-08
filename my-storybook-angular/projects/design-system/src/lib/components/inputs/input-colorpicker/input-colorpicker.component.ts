import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'app-input-colorpicker',
    templateUrl: './input-colorpicker.component.html',
    styleUrls: ['./input-colorpicker.component.scss']
})

export class InputColorPickerComponent implements OnInit {
    
    @ViewChild("inputColorPicker") inputColorPicker!: ElementRef;

    @Input() colorValue: string = "#000000";
    @Input() bgColor: string = "#fdfdfd";
    @Input() bgColorHover: string = "#ddd";
    @Input() color: string = "black";
    @Input() colorBorder: string = "#ddd";
    @Input() colorIcon: string = "black";
    @Input() colorIconHover: string = "black";
    

    @Output() colorPicked: EventEmitter<string> = new EventEmitter<string>();

    isOpen: boolean = false;

    constructor(){

    }

    ngOnInit(): void {
        
    }

    triggerAction(): void {
        let el: HTMLElement = this.inputColorPicker.nativeElement;
        el.click();
    }
    
    setColor(event: any): void {
        let colorSelected = event.target.value;
        this.colorValue = colorSelected;
        this.colorPicked.emit(this.colorValue);
    }

}