import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { SortDirection } from "../types/SortDirection";
import { SortEvent } from "../models/SortEvent";

const rotate: { [key: string]: SortDirection } = { ASC: 'DESC', DESC: '', '': 'ASC' };

@Directive({
    selector: 'th[sortable]',
    host: {
        '(click)': 'rotate()'
    }
})

export class SortableHeaderDirective {
    @Input() sortable: string = '';
	@Input() direction: SortDirection = '';
	
    @Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}