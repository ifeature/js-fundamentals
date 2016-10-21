/**
 * @author Artem Nakhodkin <me@ifeature.net>
 */

import Employee from './Employee.class';

/**
 * @param {Object} parent - Parent Class
 */
let WageEmployee = function () {
  const type = 'wage';
  let employeeRate;

  return function () {
    let WageEmployee = {
      constructor(name, rate) {
        super.constructor(name);
        //employeeRate.set(this, rate);
        employeeRate = rate;
        return this;
      },
      get type() {
        return type;
      },
      calculateMonthSalary() {
        return super.calculateMonthSalary(type, employeeRate);
      },
      get salary() {
        return super.calculateMonthSalary(type, employeeRate);
      }
    };
    Object.setPrototypeOf(WageEmployee, Employee); // parent

    return WageEmployee;
  };

};

export default WageEmployee;