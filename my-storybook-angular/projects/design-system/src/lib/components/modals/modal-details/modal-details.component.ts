import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

@Component({
    selector: 'app-modal-details',
    templateUrl: './modal-details.component.html',
    styleUrls: ['./modal-details.component.scss']
})
  
export class ModalDetailsComponent implements OnInit, AfterViewInit {

    @ViewChild('modal') private modal!: TemplateRef<ModalDetailsComponent>

    @Input() modalTitle: string = "Modal details";
    @Input() saveDescription: string = "Close";
    @Input() bgColor: string = "white";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";
    @Input() colorBorder: string = "#ddd";
    @Input() bgColorButton: string = "orange";
    @Input() colorBorderButton: string = "orange";
    @Input() colorButton: string = "white";
    @Input() bgColorButtonHover: string = "orangered";
    @Input() showInstantly: boolean = false;

    @Output() closedModal: EventEmitter<boolean> = new EventEmitter<boolean>();

    private modalRef!: NgbModalRef;

    constructor(private modalService: NgbModal){
        
    }
    
    ngAfterViewInit(): void {
        if(this.showInstantly){
            this.open();
            this.shown();
            this.modalComplete();
        }   
    }

    ngOnInit(): void {
        
    }

    open(): void {
        this.modalRef = this.modalService.open(this.modal, { size: 'lg'});
    }

    shown(): Observable<void> {
        return this.modalRef.shown;
    }

    async modalComplete(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.modalRef.result.then(resolve, resolve);
        })
    }

    async dismiss(): Promise<void> {
        this.modalRef.dismiss();
    }

    async close(): Promise<void> {
        this.modalRef.close();
        this.closedModal.emit();
    }
}