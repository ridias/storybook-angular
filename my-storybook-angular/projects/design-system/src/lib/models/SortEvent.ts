import { SortDirection } from "../types/SortDirection";

export interface SortEvent {
	column: string;
	direction: SortDirection;
}
