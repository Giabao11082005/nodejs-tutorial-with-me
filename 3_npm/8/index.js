const _ = require("lodash");

const arrNumber = [1, 2, 3, 4, 5, 6, 7];

const arrEvenNumber = _.filter(arrNumber, (n) => n % 2 == 0);
console.log(arrEvenNumber);
