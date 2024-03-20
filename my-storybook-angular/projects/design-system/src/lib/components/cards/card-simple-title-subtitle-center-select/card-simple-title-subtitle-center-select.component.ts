import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FilterOption } from "../../selects/filter-last-days/models/FilterOption";

@Component({
    selector: 'app-card-simple-title-subtitle-center-select',
    templateUrl: './card-simple-title-subtitle-center-select.component.html',
    styleUrls: ['./card-simple-title-subtitle-center-select.component.scss']
})

export class CardSimpleTitleSubtitleCenterSelectComponent implements OnInit {
    
    @Input() titleCard: string = "";
    @Input() subtitleCard: string = "";
    @Input() fontSizeTitle: number = 24;
    @Input() fontSizeSubtitle: number = 16;
    @Input() fontSizeIcon: number = 28;
    @Input() icon: string = "";
    @Input() iconColor: string = "";
    @Input() headerBorderBottomWidthPx: number = 0;
    @Input() optionIdSelected: number = 1;
    @Input() options: FilterOption[] = [];
    @Input() valueSelect: string = "";
    @Input() bgColor: string = "var(--color-onbg-secondary)";
    @Input() bgColorSelect: string = "var(--color-onbg-secondary)";
    @Input() bgColorHoverSelect: string = "var(--color-onbg-secondary-variant)";
    @Input() colorOptionSelected: string = "var(--color-font-primary)";
    @Input() fontWeightOptionSelected: number = 400;
    @Input() borderColor: string = "none";
    @Input() borderWidth: number = 0;
    @Input() borderStyle: string = "none";
    @Input() widthSelect: string = "125px";
    @Input() topSelect: number = 0;
    @Input() rightSelect: number = 5;
    @Input() bottomSelect: number = 0

    @Output() changedStateSelect: EventEmitter<FilterOption> = new EventEmitter<FilterOption>();

    isOpen: boolean = false;
    isHover: boolean = false;

    constructor(){

    }
    
    ngOnInit(): void {
        
    }

    changeIsOpen(): void {
        this.isOpen = !this.isOpen;
    }

    selectOption(option: FilterOption): void {
        this.inactiveAllOptions();
        option.active = true;
        this.isOpen = false;
        this.valueSelect = option.value;
        this.changedStateSelect.emit(option);
    }

    onHover(): void {
        this.isHover = true;
    }

    onMouseOut(): void {
        this.isHover = false;
    }

    private inactiveAllOptions(): void {
        for(let i = 0; i < this.options.length; i++){
            this.options[i].active = false;
        }
    }

}