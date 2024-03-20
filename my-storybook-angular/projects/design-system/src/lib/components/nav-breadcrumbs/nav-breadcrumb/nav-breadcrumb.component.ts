import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-nav-breadcrumb',
    templateUrl: './nav-breadcrumb.component.html',
    styleUrls: ['./nav-breadcrumb.component.scss']
})
  
export class NavBreadcrumbComponent implements OnInit {
    
    @Input() navBreadcrumb: Array<Array<string>> = [["Administrator", "/"]];
    @Input() currentTitlePage: string = "Page";
    @Input() color: string = "black";
    @Input() colorActive: string = "grey";

    @Output() clickedOption: EventEmitter<string> = new EventEmitter<string>();

    windowWidth: number = window.innerWidth;

    ngOnInit(): void {
        
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.windowWidth = event.target.innerWidth;
    }

    redirectTo(url: string): void {
        this.clickedOption.emit(url);
    }
}