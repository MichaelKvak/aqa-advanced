const getRandomNumber = () => Math.floor(Math.random() * 101);
const averageGrade = getRandomNumber();

if (averageGrade<60)
    {console.log(`Оцінка - ${averageGrade}, "Незадовільно"`)} 
else if (averageGrade >= 60 && averageGrade <= 70) 
    {console.log(`Оцінка - ${averageGrade}, "Задовільно"`)}
else if(averageGrade >= 71 && averageGrade <= 80)
    {console.log(`Оцінка - ${averageGrade}, "Добре"`)}
else if(averageGrade >= 81 && averageGrade <= 90)
    {console.log(`Оцінка - ${averageGrade}, "Дуже добре"`)}
else if(averageGrade >= 91 && averageGrade <= 100)
    {console.log(`Оцінка - ${averageGrade}, "Відмінно"`)}

  