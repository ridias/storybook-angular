import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-modal-confirmation',
    templateUrl: './modal-confirmation.component.html',
    styleUrls: ['./modal-confirmation.component.scss']
})
  
export class ModalConfirmationComponent implements OnInit, AfterViewInit {
    
    @Input() description: string = "Description";
    @Input() titleValue: string = "Title";
    @Input() icon: string = "general-icon-md bi bi-question";
    @Input() iconColor: string = "black";
    @Input() yesDescription: string = "Yes";
    @Input() noDescription: string = "No";
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

    @Output() positiveBtnClicked: EventEmitter<boolean> = new EventEmitter<boolean>(); 
    @Output() negativeBtnClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('modal') private modalContent: any;
    private modalRef!: NgbModalRef;

    constructor(private modalService: NgbModal){

    }

    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        if(this.showInstantly){
            this.open();
        }   
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

    negativeConfirm(): void {
        this.close();
        this.negativeBtnClicked.emit(true);
    }

    confirm(): void {
        this.close();
        this.positiveBtnClicked.emit(true);
    }
}