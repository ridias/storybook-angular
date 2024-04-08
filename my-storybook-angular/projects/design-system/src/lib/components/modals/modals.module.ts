import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalDetailsComponent } from "./modal-details/modal-details.component";
import { ModalCUComponent } from "./modal-cu/modal-cu.component";
import { ModalDeleteComponent } from "./modal-delete/modal-delete.component";
import { ModalConfirmationComponent } from "./modal-confirmation/modal-confirmation.component";

@NgModule({  
    declarations: [
        ModalConfirmationComponent,
        ModalCUComponent,
        ModalDeleteComponent,
        ModalDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    exports: [
        ModalConfirmationComponent,
        ModalCUComponent,
        ModalDeleteComponent,
        ModalDetailsComponent
    ]
})

export class ModalsModulle {}