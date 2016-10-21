/**
 * @author Artem Nakhodkin <me@ifeature.net>
 */

import Employee from './Employee.class';

let FixedEmployee = (function (parent) {
  const type = 'fixed';
  let employeeSalary = new WeakMap();

  let FixedEmployee = {
    constructor(name, salary) {
      super.constructor(name);
      employeeSalary.set(this, salary);
      return this;
    },
    get type() {
      return type;
    },
    calculateMonthSalary() {
      return super.calculateMonthSalary(type, employeeSalary.get(this));
    }
  };
  Object.setPrototypeOf(FixedEmployee, parent);

  return FixedEmployee;
}(Employee));

export default FixedEmployee;
