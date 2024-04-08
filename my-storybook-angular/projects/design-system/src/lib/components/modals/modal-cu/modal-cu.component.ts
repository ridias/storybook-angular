import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { ModalConfig } from "../../../models/ModalConfig";

@Component({
    selector: 'app-modal-cu',
    templateUrl: './modal-cu.component.html',
    styleUrls: ['./modal-cu.component.scss']
})

export class ModalCUComponent implements OnInit, AfterViewInit {
    
    @ViewChild('modal') private modal!: TemplateRef<ModalCUComponent>

    @Input() saveDescription: string = "Save";
    @Input() cancelDescription: string = "Cancel"
    @Input() modalConfig!: ModalConfig;
    @Input() modalTitle: string = "";
    @Input() isLoadingSaveButton: boolean = false;
    @Input() bgColor: string = "white";
    @Input() color: string = "black";
    @Input() colorHover: string = "white";
    @Input() colorBorder: string = "#ddd";
    @Input() bgColorButton: string = "orange";
    @Input() colorBorderButton: string = "orange";
    @Input() colorButton: string = "white";
    @Input() bgColorButtonHover: string = "orangered";
    @Input() showInstantly: boolean = false;

    @Output() savePressed: EventEmitter<any> = new EventEmitter<any>();
    @Output() cancelPressed: EventEmitter<any> = new EventEmitter<any>();

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
        this.cancelPressed.emit();
    }

    triggerEventBtnSave(): void {
        this.savePressed.emit();
    }
}