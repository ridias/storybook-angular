import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-modal-delete',
    templateUrl: './modal-delete.component.html',
    styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit, AfterViewInit {

    @ViewChild('modalDeleteComponent') private modal!: TemplateRef<ModalDeleteComponent>
    
    @Input() idToRemove: number = -1;
    @Input() modalTitle: string = "Delete confirmation";
    @Input() modalDescription: string = "Are you sure you want to delete this field?";
    @Input() saveDescription: string = "Delete";
    @Input() cancelDescription: string = "Cancel";
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
    
    ngOnInit(): void {
        
    }

    ngAfterViewInit(): void {
        if(this.showInstantly){
            this.open().then(() => {

            });
        }   
    }

    open(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
          this.modalRef = this.modalService.open(this.modal, { size: 'lg' })
          this.modalRef.result.then(resolve, resolve)
        })
    }
  
    async cancel(): Promise<void> {
        this.modalRef.dismiss();
        this.cancelPressed.emit();
    }
    
    deletePressed(): void {
        this.modalRef.close();
        this.savePressed.emit(this.idToRemove);
    }
    
}