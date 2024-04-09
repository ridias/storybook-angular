import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { NgbModal, NgbModalConfig, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['./modal-alert.component.scss']
})
  
export class ModalAlertComponent implements OnInit, AfterViewInit {
    
    @Input() description: string = "Order canceled successfully!";
    @Input() descriptionBtn: string = "Ok";
    @Input() titleValue: string = "Order canceled";
    @Input() icon: string = "general-icon-md bi bi-check";
    @Input() iconColor: string = "black";
    @Input() bgColor: string = "white";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";
    @Input() colorBorder: string = "#ddd";
    @Input() bgColorButton: string = "orange";
    @Input() colorBorderButton: string = "orange";
    @Input() colorButton: string = "white";
    @Input() bgColorButtonHover: string = "orangered";
    @Input() bgColorCircle: string = "#F6F6F6";
    @Input() showInstantly: boolean = false;

    @Output() savedButton: EventEmitter<boolean> = new EventEmitter<boolean>(); 

    @ViewChild('modal') private modalContent: any;
    private modalRef!: NgbModalRef;

    constructor(config: NgbModalConfig, private modalService: NgbModal){
        config.backdrop = "static";
        config.keyboard = false;
    }

    ngAfterViewInit(): void {
        if(this.showInstantly){
            this.open();
        }
    }

    ngOnInit(): void {
        
    }

    async open(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.modalRef = this.modalService.open(this.modalContent, { size: 'md', centered: true});
            this.modalRef.result.then(resolve, resolve);
        })
    }

    async dismiss(): Promise<void> {
        this.modalRef.dismiss();
    }

    async close(): Promise<void> {
        this.modalRef.close();
    }

    pressButton(): void {
        this.close();
        this.savedButton.emit(true);
    }
}