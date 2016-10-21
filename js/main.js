/**
 * @author Artem Nakhodkin <me@ifeature.net>
 */

'use strict';

import angular from 'angular';
import $ from 'jquery';
import tether from 'tether';
import bootstrap from 'bootstrap';

import FixedEmployee from './FixedEmployee.class.try'; // try
import WageEmployee from './WageEmployee.class.try';  // try

const app = angular.module('accounting', []);

app.filter('picker', ['$filter', function ($filter) {
  return function (input, filterName) {
      switch (filterName) {
        case 'descendingSalary': {
          return $filter('orderBy')(input, '-salary');
        }
        case 'fiveEmployees': {
          let filtered = $filter('limitTo')(input, '5');
          return filtered.map((employee) => {
            return {id: null, name: employee.name, salary: employee.salary};
          });
        }
        case 'lastThreeEmployees': {
          let filtered = Array.from(input, function (employee) {
            return {id: employee.id, name: null, salary: null};
          });
          return filtered;
        }
        default: {
          return input;
        }
      }
  };
}]);

app.factory('employeeFactory', ['$http', function ($http) {
  let employees = [
    Object.create(WageEmployee()()).constructor('John', 20),
    Object.create(WageEmployee()()).constructor('Peter', 22),
    Object.create(FixedEmployee()()).constructor('Mark', 2200),

    Object.create(FixedEmployee()()).constructor('Paul', 2590),
    Object.create(FixedEmployee()()).constructor('Lena', 2300)
  ];

  return {
    /**
     * Mock the process of obtaining data
     */
    list() {
      return employees;
    },
    add({name, type, amount} = {}) {
      switch (type) {
        case 'WageEmployee': {
          let employee = Object.create(WageEmployee()()).constructor(name, amount);
          employees.push(employee);
          return employee;
        }
        case 'FixedEmployee': {
          let employee = Object.create(FixedEmployee()()).constructor(name, amount);
          employees.push(employee);
          return employee;
        }
        default: {
          throw new TypeError('Unknown type of employee');
        }
      }
    }
  };
}]);

function employeeCtrl($scope, employeeFactory) {
  $scope.tasks = [
    {title: 'Order all employees by salary per month descending', id: 'Task 1', filter: 'descendingSalary'},
    {title: 'Output employee name and salary per month for 5 first employees', id: 'Task 2', filter: 'fiveEmployees'},
    {title: 'Output employee id for 3 last employees', id: 'Task 3', filter: 'lastThreeEmployees'}
  ];

  employeeFactory.add({name: 'Artem', type: 'WageEmployee', amount: 100});

  $scope.employees = employeeFactory.list();

}

employeeCtrl.$inject = ['$scope', 'employeeFactory'];

app.controller('employeeCtrl', employeeCtrl);
