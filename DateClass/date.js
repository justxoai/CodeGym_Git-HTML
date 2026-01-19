class MyDate {
    day;
    month;
    year;

    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay(){
        return this.day;
    }

    getMonth(){
        return this.month;
    }

    getYear(){
        return this.year;
    }

    setDay(day){
        this.day = day;
    }
    
    setMonth(month){
        this.month = month;
    }

    setYear(year){
        this.year = year;
    }

    toString(){
        return this.day + "/" + this.month + "/" + this.year;
    }
}