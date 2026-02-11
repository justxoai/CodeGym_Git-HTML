class Student{
    studentId;
    studentName;
    studentDob;
    studentGender;
    studentClass;
    studentImage;

    constructor(studentId, studentName, studentDob, studentGender, studentClass, studentImage){
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentDob = studentDob;
        this.studentGender = studentGender;
        this.studentClass = studentClass;
        this.studentImage = studentImage;
    }

    getStudentId(){
        return this.studentId;
    }

    getStudentName(){
        return this.studentName;
    }

    getStudentDob(){
        return this.studentDob;
    }

    getStudentGender(){
        return this.studentGender;
    }

    getStudentClass(){
        return this.studentClass;
    }

    getStudentImage(){
        return this.studentImage;
    }

    setStudentId(studentId){
        this.studentId = studentId;
    }

    setStudentName(studentName){
        this.studentName = studentName;
    }

    setStudentDob(studentDob){
        this.studentDob = studentDob;
    }

    setStudentGender(studentGender){
        this.studentGender = studentGender;
    }

    setStudentClass(studentClass){
        this.studentClass = studentClass;
    }

    setStudentImage(studentImage){
        this.studentImage = studentImage;
    }

    toString(){
        return "Student Information: " + this.studentName + ", Student ID: " + this.studentId + ", Student DOB: " + this.studentDob + ", Student Gender: " + this.studentGender + ", Student Major: " + this.studentClass + ", Student Image: " + this.studentImage;
    }
}