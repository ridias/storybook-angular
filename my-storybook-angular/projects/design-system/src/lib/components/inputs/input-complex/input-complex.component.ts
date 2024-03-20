import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-input-complex',
    templateUrl: './input-complex.component.html',
    styleUrls: ['./input-complex.component.scss']
})

export class InputComplexComponent implements OnInit {
    
    @Input() colorLabel: string = "black";
    @Input() colorValue: string = "black";
    @Input() labelValue: string = "Field";
    @Input() colorBorderBottom: string = "#ddd";
    @Input() type: string = "text";
    @Input() placeholder: string = "";
    @Input() required: boolean = true;
    @Input() pattern: string = "";
    @Input() errorValue: string = "Error!";
    @Input() errorRequired: string = "Required!";
    @Input() value: string = "";

    @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
    @Output() valueValid: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void {
        
    }

    setValue(): void {
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