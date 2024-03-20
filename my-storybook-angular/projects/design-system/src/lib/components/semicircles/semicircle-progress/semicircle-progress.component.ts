import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-semicircle-progress',
    templateUrl: './semicircle-progress.component.html',
    styleUrls: ['./semicircle-progress.component.scss'],
})

export class SemicircleProgressComponent implements OnInit, OnChanges {
    
    @Input() min: number = 0;
    @Input() max: number = 100;
    @Input() value: number = 50;
    @Input() titleToolTip: string = "";
    @Input() titleCard: string = "";
    
    @Input() colorsScale: string[] = ["#C0D981", "#FDE060", "#FABF59", "#FF8F4B"];
    @Input() valuesScale: number[] = [];

    colorSemiCircle: string = "#C0D981";
    currentTop: number = 5;
    currentLeft: number = 70;
    currentDeg: number = 0;
    isToolTip: boolean = false;


    ngOnInit(): void {
        this.currentLeft =  window.innerWidth < 500 ? 70 : 70;
        this.currentTop = 5;
        this.currentDeg = 0;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.recalculate();
    }

    recalculate(): void {
        let percentage = this.value * 100 / this.max
        let deg = Math.floor(percentage * 180 / 100) - 90
        this.currentDeg = deg;
        if(this.currentDeg > 90) this.currentDeg = 90;
        if(this.currentDeg < -90) this.currentDeg = -90;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.currentLeft = event.target.innerWidth < 500 ? 70 : 70;
        this.recalculate();
    }

    showToolTip(): void {
        this.isToolTip = true;
    }

    hideToolTip(): void {
        this.isToolTip = false;
    }
}