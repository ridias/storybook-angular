import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.scss']
})
  
export class ButtonIconComponent {

    @Input() disabled: boolean = false;
    @Input() icon: string = "bi bi-person";
    @Input() bgColor: string = "orange";
    @Input() bgColorHover: string = "orangered";
    @Input() colorBorder: string = "orange";
    @Input() iconColor: string = "white";
    @Input() iconColorHover: string = "white";
    @Input() iconSize: 'extra-sm' | 'sm' | 'md' | 'lg' | 'extra-lg' = "md";
    @Input() isLoading:  boolean = false;
    @Input() isLoadingColor: string = "white";

    @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    public get iconClass(): string {
        return "general-icon-" + this.iconSize + " " + this.icon;
    }

    public get loadingClass(): string {
        return "loader loader-" + this.iconSize;
    }

    triggedButton(): void {
        this.clicked.emit(true);
    }
}