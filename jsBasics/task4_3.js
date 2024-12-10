const randomHeightCylinderNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
const randomRadiusCylinderNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const cylinderArea = Math.PI * Math.pow(randomRadiusCylinderNumber, 2) * randomHeightCylinderNumber;

const roundedCylinderArea = parseFloat(cylinderArea.toFixed(2));

console.log('cylinder height = ', randomHeightCylinderNumber);
console.log('cylinder radius = ', randomRadiusCylinderNumber);
console.log('cylinder area = ', roundedCylinderArea);
