const getRandomNumber = () => Math.floor(Math.random() * 101);
const averageGrade = getRandomNumber();

console.log(
  averageGrade < 60 ? `Оцінка - ${averageGrade}, "Незадовільно"` :
  averageGrade >= 60 && averageGrade <= 70 ? `Оцінка - ${averageGrade}, "Задовільно"` :
  averageGrade >= 71 && averageGrade <= 80 ? `Оцінка - ${averageGrade}, "Добре"` :
  averageGrade >= 81 && averageGrade <= 90 ? `Оцінка - ${averageGrade}, "Дуже добре"` :
  averageGrade >= 91 && averageGrade <= 100 ? `Оцінка - ${averageGrade}, "Відмінно"` : ''
);
