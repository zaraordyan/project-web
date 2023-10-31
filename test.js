
/*prob 1
const originalArray = [123, 45, 789, 246, 9875, 321, 654];

let newArray = originalArray.filter(number => number % 2 === 0 && number >= 100 && number <= 999);

console.log(newArray);
*/


/*prob 2
const stringArray = ["hello", "world", "example"];

function containsOnlyLowerCase(array) {
  return array.every(str => /^[a-z]+$/.test(str));
}


if (containsOnlyLowerCase(stringArray)) {
  const lastString = stringArray.pop();
  stringArray.unshift(lastString);
  stringArray.push(lastString);
} else {
  stringArray.push('abc');
}

console.log(stringArray);
*/

/*prob 3
const students = [
    {
      name: "Arshak",
      lastName: "DKhachatryan",
      groupNumber: 101,
      grades: [17, 15, 14, 14, 13],
    },
    {
      name: "Mane",
      lastName: "Esayan",
      groupNumber: 102,
      grades: [12, 9, 20, 14, 16],
    },
    {
      name: "Khachatur",
      lastName: "Amiryan",
      groupNumber: 101,
      grades: [14, 18, 15, 12, 15],
    },
  ];
  
  
  const filteredStudents = students.filter(student => student.groupNumber === 101 && student.grades.some(grade => grade >= 12));
  
  filteredStudents.forEach(student => {
    student.grand = 5000; 
  });
  
  console.log(filteredStudents);
  */