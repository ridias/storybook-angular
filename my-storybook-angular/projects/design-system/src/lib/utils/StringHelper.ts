export class StringHelper {

    static addLeadingZerosToNum(num: number, numLength: number): string {
        let numStr = num + "";
        while(numStr.length < numLength){
            numStr = "0" + numStr;
        }
        return numStr;
    }

    static addLeadingZerosToStr(num: string, numLength: number): string {
        let numStr = num + "";
        while(numStr.length < numLength){
            numStr = "0" + numStr;
        }
        return numStr;
    }
}