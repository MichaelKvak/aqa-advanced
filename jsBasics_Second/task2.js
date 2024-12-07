const getRandomNumber = () => Math.floor(Math.random() * 101);
const averageGrade = getRandomNumber();

switch (true) {
	case averageGrade < 60:
		console.log(`Оцінка - ${averageGrade}, "Незадовільно"`);
		break;

	case averageGrade >= 60 && averageGrade <= 70:
		console.log(`Оцінка - ${averageGrade}, "Задовільно"`);
		break;

	case averageGrade >= 71 && averageGrade <= 80:
		console.log(`Оцінка - ${averageGrade}, "Добре"`);
		break;

	case averageGrade >= 81 && averageGrade <= 90:
		console.log(`Оцінка - ${averageGrade}, "Дуже добре"`);
		break;

	case averageGrade >= 91 && averageGrade <= 100:
		console.log(`Оцінка - ${averageGrade}, "Відмінно"`);
		break;

	default:
		console.log('Перездача');
}
