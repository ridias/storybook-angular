import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-text-real-datetime',
    templateUrl: './text-real-datetime.component.html',
    styleUrls: ['./text-real-datetime.component.scss']
})

export class TextRealDatetimeComponent implements OnInit, OnDestroy {

    @Input() months: string[] = [];
    @Input() colorDate: string = "black";
    @Input() colorTime: string = "#aaa"
    @Input() fontSizeDate: string = "20px";
    @Input() fontSizeTime: string = "16px";
    
    date: string = "";
    time: string = ""
    intervalId: any = null;

    constructor(){

    }

    ngOnInit(): void {
        this.calculate();
        this.intervalId = setInterval(() => {
            this.calculate();
        }, 1000)
    }
    
    ngOnDestroy(): void {
        if(this.intervalId != null){ 
            clearInterval(this.intervalId)
        }
    }
    
    calculate(): void {
        let datetime = new Date()
        this.date = this.transformDateToISO(datetime).toLowerCase();
        this.time = this.transformTimeToString(datetime);
    }

    private transformDateToISO(date: Date): string {
        let dayOfTheMonth = date.getDate();
        let dayStr = dayOfTheMonth < 10 ? "0" + dayOfTheMonth : "" + dayOfTheMonth;
        let numMonth = date.getMonth();
        let year = date.getFullYear();
        return dayStr + " " + this.getMonthByNumber(numMonth) + " " + year;
    }

    private transformTimeToString(date: Date): string {
        if(date == null) return "";

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let hoursStr = hours < 10 ? "0" + hours : "" + hours;
        let minutesStr = minutes < 10 ? "0" + minutes : "" + minutes;
        let secondsStr = seconds < 10 ? "0" + seconds : "" + seconds;
        return hoursStr + ":" + minutesStr + ":" + secondsStr;
    }

    private getMonthByNumber(numMonth: number): string {
        if(numMonth < 0 || numMonth > 11) return "";
        if(numMonth <= this.months.length){
            return this.months[numMonth];
        }
        return "";
    }
}