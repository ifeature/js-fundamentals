/**
 * @author Artem Nakhodkin <me@ifeature.net>
 */

'use strict';

function generateID() {
  return Math.random().toString(36).slice(2);
}

/**
 * id is private property
 * _name is protected property, to access it directly you need to use getter-method
 */
let Employee = (function () {
  let id = new WeakMap();

  let Employee = {
    constructor(name) {
      id.set(this, generateID());
      this._name = name;
      return this;
    },
    get id() {
      return id.get(this);
    },
    get name() {
      return this._name;
    },
    set name(value) {
      throw new TypeError('Cannot set name property');
    },
    set id(value) {
      throw new TypeError('Cannot set id property');
    },
    calculateMonthSalary(type, amount) {
      switch (type) {
        case 'wage': {
          return 20.8 * 8 * amount;
        }
        case 'fixed': {
          return amount;
        }
        default: {
          throw new TypeError('Unknown salary type');
        }
      }
    }
  };

  return Employee;
}());

export default Employee;
