//  create one object
var studentDetails = {
    name:"John",
    age:21,
    isActive:true,
    totalMarks:450,
    performance:''
}

// console.log("Student Details Object:", studentDetails);

// If totalMarks > 400 then performance is "Excellent"
// If totalMarks > 300 then performance is "Good"
// If totalMarks > 200 then performance is "Average"
// If totalMarks <= 200 then performance is "Poor"

console.log("Name of Student:",studentDetails.name);

if(studentDetails.totalMarks > 400){
    studentDetails.performance = "Excellent"
}else {
    studentDetails.performance = "Poor"
}
console.log("Updated Student Details Object:",studentDetails);

// --------------------------------------------------------
var empDetails ={
    firstName: "John",
    lastName: "Doe",
    age: 35,
    city: "New York",
    salary: 50000,
    isEmployed: true,
}
console.log(empDetails);
// if employe is isEmployed so bonus is 5000 add into salary
// isEmployed we call as flag either true or false
// condition:- empDetails.isEmployed
console.log("Actual Emp salary:- ",empDetails.salary);

if(empDetails.isEmployed === true){
    empDetails.salary = empDetails.salary + 5000;
console.log("Update Emp salary:- ",empDetails.salary);

}else{
    console.log("Employe is not active");
}
// if employe age is greater than 30 so bonus is 7000 add into salary
if(empDetails.age > 30){
    empDetails.salary = empDetails.salary + 7000;
console.log("Update Emp salary:- ",empDetails.salary);

}else {
    console.log("Employe age is less than 30");
}
// if employe city is newyork so bonus is 6000 add into salary
// if employe age is greater than 30 and city is newyork so bonus is 8000 add into salary
if(empDetails.age > 30 && empDetails.city === "New York") {
    empDetails.salary += 8000;
}else{
    console.log("Employe's age is not greater than 30 and employe's city is not New York");
}
console.log("Update Emp salary:- ",empDetails.salary);

// --------------------------------------------------------
// if else if ladder
var marks = 39;

if(marks >=90 && marks <=100){
    console.log("Grade A+");
}else if(marks >=80 && marks <90){
    console.log("Grade A");
}else if(marks >=70 && marks <80){
    console.log("Grade B+");
}else if(marks >=60 && marks <70){
    console.log("Grade B");
}else if(marks >=50 && marks <60){
    console.log("Grade C");
}else if(marks >=40 && marks <50){
    console.log("Grade D");
}else {
    console.log("Congrats you are fail");
}
// --------------------------------------------------------
// nested if else

    var cart = 20;
    if(product = "laptop"){
        if(configuration = "i7"){
            if(hardisksize = "1TB"){
                console.log("Laptop is available with i7 and 1TB");
            }
        }
    }
    // --------------------------------------------------------

    // switch case
    var num = 5;

    switch(num){
        case 1: 
            console.log("Number is 1");
            break;
        case 2:
            console.log("Number is 2");
            break;
        case 3:
            console.log("Number is 3");
            break;
        default:
            console.log("Number is not 1, 2 or 3");
    }