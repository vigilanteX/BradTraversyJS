const people = [
    { name: "Alice", age: 28, occupation: "Engineer",
        blockCodes: ["A", "C"] },

    { name: "Bob", age: 32, occupation: "Doctor",
        blockCodes: ["A", "F", "G"] },

    { name: "Charlie", age: 24, occupation: "Designer" },

    { name: "David", age: 29, occupation: "Developer",
        blockCodes: ["C", "D"] },

    { name: "Emma", age: 27, occupation: "Teacher",
        blockCodes: ["A", "C", "E"] },

    { name: "Frank", age: 35, occupation: "Manager" },

    { name: "Grace", age: 31, occupation: "Writer",
        blockCodes: ["B", "C"] },

    { name: "Hannah", age: 26, occupation: "Nurse",
        blockCodes: ["A", "G"] },

    { name: "Ian", age: 33, occupation: "Analyst",
        blockCodes: ["C", "F"] },

    { name: "Julia", age: 30, occupation: "Architect" },

    { name: "Kevin", age: 29, occupation: "Pilot",
        blockCodes: ["A", "D"] },

    { name: "Laura", age: 34, occupation: "Scientist",
        blockCodes: ["C", "E", "G"] },

    { name: "Mike", age: 28, occupation: "Chef" },

    { name: "Nina", age: 26, occupation: "QA Engineer",
        blockCodes: ["A", "C"] },

    { name: "Oscar", age: 31, occupation: "Lawyer",
        blockCodes: ["C", "G"] }
];


console.log(people.filter(function(obj)
{
    return obj.age>30
}));