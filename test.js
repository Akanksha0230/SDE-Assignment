const { processData } = require('./productCodeProcessor');

const input = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"];
const result = processData(input);
console.log(result);
