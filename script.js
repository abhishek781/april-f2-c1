/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let developers = arr.filter(employee => employee.profession === "developer");
  let developerNames = developers.map(developer => developer.name);
  console.log(developerNames);
}

function PrintDeveloperbyForEach() {
  let developerNames = [];
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      developerNames.push(employee.name);
    }
  });
  console.log(developerNames);
}

function addData() {
  let newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  let newArr = arr.filter(employee => employee.profession !== "admin");
  console.log(newArr);
}

function concatenateArray() {
  let newArray = [
    { id: 4, name: "mike", age: "22", profession: "designer" },
    { id: 5, name: "jane", age: "25", profession: "manager" },
    { id: 6, name: "peter", age: "30", profession: "engineer" }
  ];
  let concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
