let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

for (student of students) {
  let average = 0;

  for (let index = 0; index < student.scores.length; index++) {
    const average = average + student.scores[index];
  }
  average = average / student.scores.length;
}

console.log(student.name, average);
