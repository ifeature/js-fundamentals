/**
 * @author Artem Nakhodkin <me@ifeature.net>
 */

import Employee from './Employee.class';

/**
 * @param {Object} parent - Parent Class
 */
let FixedEmployee = function () {
  const type = 'fixed';
  let employeeSalary;

  return function () {
    let FixedEmployee = {
      constructor(name, salary) {
        super.constructor(name);
        employeeSalary = salary;
        return this;
      },
      get type() {
        return type;
      },
      calculateMonthSalary() {
        return super.calculateMonthSalary(type, employeeSalary);
      },
      get salary() {
        return super.calculateMonthSalary(type, employeeSalary);
      }
    };
    Object.setPrototypeOf(FixedEmployee, Employee); // parent

    return FixedEmployee;
  };

};

export default FixedEmployee;