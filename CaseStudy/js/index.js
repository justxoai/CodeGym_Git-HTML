let studentArray = [];
let edittingIndex = -1;

function displayStudent() {
    let tableContent = "";

    for (i = 0; i < studentArray.length; i++) {
        tableContent += "<tr>"
        tableContent += "<td>" + Number(Number(i) + 1) + "</td>";
        tableContent += "<td>" + studentArray[i].studentId + "</td>";
        tableContent += "<td>" + studentArray[i].studentName + "</td>";
        tableContent += "<td>" + studentArray[i].studentDob + "</td>";
        tableContent += "<td>" + studentArray[i].studentGender + "</td>";
        tableContent += "<td>" + studentArray[i].studentClass + "</td>";
        tableContent += "<td><img src='"+studentArray[i].studentImage+"' alt='' style='width:100px;height:100px;'></td>";
        tableContent += "<td><button onclick='editStudent(" + i + ")'>Edit</button><button onclick='removeStudent(" + i + ")'>Remove</button></td>"
    }
    document.getElementById("studentContent").innerHTML = tableContent;
}

function addStudent() {
    let studentId = document.getElementById("idInput").value;
    let studentName = document.getElementById("nameInput").value;
    let studentDob = document.getElementById("dobInput").value;
    let studentGender = document.getElementById("genderInput").value;
    let studentMajor = document.getElementById("classInput").value;
    let studentImage = document.getElementById("imageInput").value;

    let newStudent = new Student(studentId, studentName, studentDob, studentGender, studentMajor, studentImage);

    studentArray.push(newStudent);

    document.getElementById("idInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("dobInput").value = "";
    document.getElementById("genderInput").value = "";
    document.getElementById("classInput").value = "";
    document.getElementById("imageInput").value = "";

    saveLocal();
    displayStudent();
}

function editStudent(index) {
    edittingIndex = index;

    document.getElementById("idInput").value = studentArray[index].studentId;
    document.getElementById("nameInput").value = studentArray[index].studentName;
    document.getElementById("dobInput").value = studentArray[index].studentDob;
    document.getElementById("genderInput").value = studentArray[index].studentGender;
    document.getElementById("classInput").value = studentArray[index].studentClass;
    document.getElementById("imageInput").value = studentArray[index].studentImage;

    document.getElementById("saveButton").innerText = "Save Changes";
}

function saveStudent() {
    if (edittingIndex == -1) {
        addStudent();
    } else {
        let studentId = document.getElementById("idInput").value;
        let studentName = document.getElementById("nameInput").value;
        let studentDob = document.getElementById("dobInput").value;
        let studentGender = document.getElementById("genderInput").value;
        let studentMajor = document.getElementById("classInput").value;
        let studentImage = document.getElementById("imageInput").value;

        studentArray[edittingIndex].setStudentId(studentId);
        studentArray[edittingIndex].setStudentName(studentName);
        studentArray[edittingIndex].setStudentDob(studentDob);
        studentArray[edittingIndex].setStudentGender(studentGender);
        studentArray[edittingIndex].setStudentClass(studentMajor);
        studentArray[edittingIndex].setStudentImage(studentImage);

        edittingIndex = -1;
        
        document.getElementById("saveButton").innerText = "Register Student";
    }

    document.getElementById("idInput").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("dobInput").value = "";
    document.getElementById("genderInput").value = "";
    document.getElementById("classInput").value = "";
    document.getElementById("imageInput").value = "";

    saveLocal();
    displayStudent();
}

function removeStudent(index) {
    studentArray.splice(index, 1);
    saveLocal();
    displayStudent();
}

// Change the Array: studentArray to Json with key: student
// {student: [studentArray]}
function saveLocal(){
    localStorage.setItem("student", JSON.stringify(studentArray));
}

// change JSON to Array
function loadLocal(){
    let data = localStorage.getItem("student");

    if(data){
        let prase = JSON.parse(data);
    
        // Change load to Create new Student
        studentArray = prase.map(s => new Student(s.studentId, s.studentName, s.studentDob, s.studentGender, s.studentClass, s.studentImage));
    }
}

loadLocal(); 
displayStudent();