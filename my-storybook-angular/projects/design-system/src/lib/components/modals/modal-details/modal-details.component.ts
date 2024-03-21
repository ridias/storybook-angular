import { Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

@Component({
    selector: 'app-modal-details',
    templateUrl: './modal-details.component.html',
    styleUrls: ['./modal-details.component.scss']
})
  
export class ModalDetailsComponent implements OnInit {
    
    @Input() modalTitle: string = "";
    @ViewChild('modal') private modal!: TemplateRef<ModalDetailsComponent>

    private modalRef!: NgbModalRef;

    constructor(private modalService: NgbModal){
         
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
    }

}