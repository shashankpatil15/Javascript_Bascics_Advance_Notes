var departDetails = {
    departId: 101,
    departName: "Sales",
    location: "New York",
    totalEmployee: 25,
    budget: 50000,
    isActive: true
}
console.log("Department Details Object:", departDetails);

// while total employee is less than 26 so increase budget by 10000
console.log("Initial Budget:", departDetails.budget);

while(departDetails.totalEmployee < 26){
    departDetails.budget += 10000; // Increase budget by 10000
    departDetails.totalEmployee += 1; // Increase totalEmployee by 1
    console.log("Updated Budget:", departDetails.budget);
    console.log("Updated Total Employee:", departDetails.totalEmployee);
}

// do while

do{
    departDetails.budget += 5000; // Increase budget by 5000
    departDetails.totalEmployee += 1; // Increase totalEmployee by 1
    console.log("Updated Budget in do while:", departDetails.budget);
    console.log("Updated Total Employee in do while:", departDetails.totalEmployee);
}while(departDetails.totalEmployee < 30);

console.log("Final Department Details Object:", departDetails);