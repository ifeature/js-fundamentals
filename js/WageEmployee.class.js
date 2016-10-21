import Employee from './Employee.class';

/**
 * @param {Object} parent - Parent Class
 */
let WageEmployee = (function (parent) {
  const type = 'wage';
  let employeeRate = new WeakMap();

  let WageEmployee = {
    constructor(name, rate) {
      super.constructor(name);
      employeeRate.set(this, rate);
      return this;
    },
    get type() {
      return type;
    },
    calculateMonthSalary() {
      return super.calculateMonthSalary(type, employeeRate.get(this));
    }
  };
  Object.setPrototypeOf(WageEmployee, parent);

  return WageEmployee;
}(Employee));

export default WageEmployee;