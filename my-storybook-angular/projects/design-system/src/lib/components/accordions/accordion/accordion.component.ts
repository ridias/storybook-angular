import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent implements OnInit {
    
    @Input() text: string = "Accordion 1"
    @Input() disable: boolean = false;
    @Input() borderWidth: number = 1;
    @Input() borderStyle: string = "solid"
    @Input() borderColor: string = "#CCC";
    @Input() iconColor: string = "#CCC";
    @Input() isOpen: boolean = false;

    @Output() accordionOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

    borderBottom: string = "none";
    transformIcon: string = "rotate(0deg)";

    ngOnInit(): void {
        
    }

    triggerAction(): void {
        if(this.disable) return;

        this.isOpen = !this.isOpen;
        if(this.isOpen){
            this.open();
        }else{
            this.close()
        }
    }
    
    open(): void {
        this.borderBottom = this.borderWidth + "px " + this.borderStyle + " " + this.borderColor;
        this.transformIcon = "rotate(180deg)";
        this.accordionOpened.emit(this.isOpen);
    }

    close(): void {
        this.borderBottom = "none";
        this.transformIcon = "rotate(0deg)";
        this.accordionOpened.emit(this.isOpen);
    }
}