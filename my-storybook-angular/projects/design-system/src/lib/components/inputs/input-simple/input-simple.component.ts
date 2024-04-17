import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-input-simple',
    templateUrl: './input-simple.component.html',
    styleUrls: ['./input-simple.component.scss']
})

export class InputSimpleComponent implements OnInit {
    
    @Input() colorValue: string = "black";
    @Input() colorBorder: string = "#ddd";
    @Input() type: "text" | "number" | "password" | "email" | "search" | "tel" = "text";
    @Input() placeholder: string = "";
    @Input() colorPlaceholder: string = "grey";
    @Input() required: boolean = true;
    @Input() pattern: string = "";
    @Input() errorValue: string = "Error!";
    @Input() errorRequired: string = "Required!";
    @Input() value: string = "";
    @Input() bgColor: string = "#fdfdfd";
    @Input() disable: boolean = false;

    @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() valueValid: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void {
        
    }

    setValue(): void {
        if(this.disable) return;
        this.valueChanged.emit(this.value);
    }

    isValueValid(): boolean {
        let isValid: boolean = false;
        if(new RegExp(this.pattern).test(this.value)){
            isValid = true;
        }

        this.valueValid.emit(isValid);
        return isValid;
    }
}