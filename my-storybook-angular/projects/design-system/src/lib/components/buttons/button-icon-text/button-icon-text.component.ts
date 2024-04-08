import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button-icon-text',
    templateUrl: './button-icon-text.component.html',
    styleUrls: ['./button-icon-text.component.scss']
})
  
export class ButtonIconTextComponent {

    @Input() value: string = "Button";
    @Input() icon: string = "bi bi-person";
    @Input() disabled: boolean = false;
    @Input() color: string = "white";
    @Input() colorHover: string = "white";
    @Input() bgColor: string = "orange";
    @Input() bgColorHover: string = "orangered";
    @Input() colorBorder: string = "orange";
    @Input() isLoading: boolean = false;
    @Input() isLoadingColor: string = ""
    @Input() iconColor: string = "white";
    @Input() iconColorHover: string = "white";

    @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    iconSize = "md";

    triggedButton(): void {
        this.clicked.emit(true);
    }

    public get iconClass(): string {
        return "general-icon-" + this.iconSize + " " + this.icon;
    }

    public get loadingClass(): string {
        return "loader loader-" + this.iconSize;
    }
}