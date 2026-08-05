let marks = document.getElementById("marks");
let grade = document.getElementById("grade");
let status = document.getElementById("status");

function checkGrade() {
    let studentMarks = Number(marks.value);

    if (marks.value === "") {
        alert("Please Enter Your Marks")
    }
    else if (studentMarks > 100 || studentMarks < 0) {
        alert("Invalid Marks")
    }
    else if (studentMarks >= 90) {
        grade.textContent = "Grade A+"
        status.textContent = "Pass"
        grade.style.color = "Green"
        status.style.color = "Green"
    }
    else if (studentMarks >= 80) {
        grade.textContent = "Grade A"
        status.textContent = "Pass"
        grade.style.color = "Green"
        status.style.color = "Green"
    }
    else if (studentMarks >= 70) {
        grade.textContent = "Grade B"
        status.textContent = "Pass"
        grade.style.color = "Green"
        status.style.color = "Green"
    }
    else if (studentMarks >= 60) {
        grade.textContent = "Grade C"
        status.textContent = "Pass"
        grade.style.color = "Orange"
        status.style.color = "Green"
    }
    else if (studentMarks >= 50) {
        grade.textContent = "Grade D"
        status.textContent = "Pass"
        grade.style.color = "Orange"
        status.style.color = "Green"
    }
    else {
        grade.textContent = "Fail"
        status.textContent = "Fail"
        grade.style.color = "Red"
        status.style.color = "Red"
    }
}

function clearResult(){
    marks.value = "";
    status.textContent = "";
    grade.textContent = "";
}