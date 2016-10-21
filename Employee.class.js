/**
 * @author Artem Nakhodkin <me@ifeature.net>
 */

const EmployeeClass = (function () {
    'use strict';

    function generateID() {
        return Math.random().toString(36).slice(2);
    }

    let Employee = (function () {
        let id;

        let Employee = {
            constructor(name) {
                // For each call of the constructor id will be generated
                id = generateID();
                this.name = name;
                return this;
            },
            get id() {
                return id;
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

    /**
     * @param {Object} parent - Parent Class
     */
    let WageEmployee = (function (parent) {
        const type = 'wage';
        let employeeRate;

        let WageEmployee = {
            constructor(name, rate) {
                super.constructor(name);
                employeeRate = rate;
                return this;
            },
            get type() {
                return type;
            },
            calculateMonthSalary() {
                return super.calculateMonthSalary(type, employeeRate);
            }
        };
        Object.setPrototypeOf(WageEmployee, parent);

        return WageEmployee;
    }(Employee));


    let FixedEmployee = (function (parent) {
        const type = 'fixed';
        let employeeSalary;

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
            }
        };
        Object.setPrototypeOf(FixedEmployee, parent);

        return FixedEmployee;
    }(Employee));

    return {
        Employee,
        WageEmployee,
        FixedEmployee
    };
}());