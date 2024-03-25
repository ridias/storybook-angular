import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { StringHelper } from "../../../utils/StringHelper";

@Component({
    selector: 'app-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.scss']
})

export class TimepickerComponent implements OnInit {
    
    @Input() hours: number = 0;
    @Input() minutes: number = 0;
    @Input() seconds: number = 0;
    @Input() bgColor: string = "#fdfdfd";
    @Input() bgColorHover: string = "#ddd"
    @Input() color: string = "black";
    @Input() colorBorder: string = "#ddd";
    @Input() colorIcon: string = "black";
    @Input() colorIconHover: string = "black";
    @Input() hoursDescription: string = "Hours";
    @Input() minutesDescription: string = "Minutes";
    @Input() secondsDescription: string = "Seconds";
    
    @Output() changedTime: EventEmitter<string> = new EventEmitter<string>();

    timeStr: string = "00:00:00";
    isOpen: boolean = false;
    hoursOptions: string[] = [];
    minutesOptions: string[] = [];
    secondsOptions: string[] = [];
    
    constructor(){

    }

    ngOnInit(): void {
        this.calculate();
        this.loadHours();
        this.loadMinutes();
        this.loadSeconds();
    }

    @HostListener("document:click", ['$event']) clickOut(event: any): void {
        let target = event.target;
        let retries = 5;

        while((target.className != "timepicker-button" && target.className != "timepicker") && retries > 0){
            target = target.parentNode;
            if(target == null || target == undefined) break;
            retries -= 1;
        }

        if(target == null || target == undefined){
            this.isOpen = false;
        }
        
        if(target != null || target != undefined){
            if(target.className != "timepicker-button" && target.className != "timepicker"){
                this.isOpen = false;
            }
        }
    }

    triggerAction(): void {
        this.isOpen = !this.isOpen;
    }

    onChangeHour(): void {
        this.calculate();
    }

    onChangeMinutes(): void {
        this.calculate();
    }

    onChangeSeconds(): void {
        this.calculate();
    }

    private calculate(): void {
        let hoursStr = StringHelper.addLeadingZerosToNum(this.hours, 2);
        let minuteStr = StringHelper.addLeadingZerosToNum(this.minutes, 2);
        let secondsStr = StringHelper.addLeadingZerosToNum(this.seconds, 2);
        this.timeStr = hoursStr + ":" + minuteStr + ":" + secondsStr;
        this.changedTime.emit(this.timeStr);
    }

    private loadHours(): void {
        for(let i = 0; i < 24; i++){
            let hoursStr = i < 10 ? "0" + i : i + "";
            this.hoursOptions.push(hoursStr);
        }
    }

    private loadMinutes(): void {
        for(let i = 0; i < 60; i++){
            let minutesStr = i < 10 ? "0" + i : i + "";
            this.minutesOptions.push(minutesStr);
        }
    }

    private loadSeconds(): void {
        for(let i = 0; i < 60; i++){
            let secondsStr = i < 10 ? "0" + i : i + "";
            this.secondsOptions.push(secondsStr);
        }
    }

}