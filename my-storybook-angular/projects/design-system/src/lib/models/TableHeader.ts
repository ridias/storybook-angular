import { SortDirection } from "../types/SortDirection";

export interface TableHeader {
    id: string;
    name: string;
    direction: SortDirection;
    isSortCol: boolean;
}