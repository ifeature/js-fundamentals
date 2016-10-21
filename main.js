'use strict';

const we = Object.create(APP.WageEmployee).constructor('Peter', 150);
console.log(we.calculateMonthSalary());
console.log(we.id);

const we2 = Object.create(APP.FixedEmployee).constructor('Illuxa', 'rate');
console.log(we2);
console.log(we2.id);