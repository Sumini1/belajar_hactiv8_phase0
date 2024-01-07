students = [
  { name: "andi", grade: 7.5 },
  { name: "novi", grade: 9 },
  { name: "lia", grade: 7 },
  { name: "aku", grade: 6 },
  { name: "kamu", grade: 8 },
];

const filteredGrade7 = (dataStudents) => {
  // code di sini
  
    let filtered = [];
  // looping
  for (let i = 0; i < dataStudents.length; i++) {
   if (dataStudents[i].grade >= 8) {
    filtered.push(dataStudents[i])
   }
    
  }
  return filtered
  

};

let filteredStudents = filteredGrade7(students);
console.log(filteredStudents);
