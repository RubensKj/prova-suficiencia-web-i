import { EmployeeModel } from "../models/employee";
import { getItem, removeItem, setItem } from "./localStorage";

const EMPLOYEES_KEY = "employees";

export function getEmployees(): EmployeeModel[] {
  const employeesJson = getItem(EMPLOYEES_KEY);

  if (employeesJson === null)
    return [];

  return JSON.parse(employeesJson);
}

export function saveEmployee(employee: EmployeeModel): boolean {
  const employees = getEmployees();

  if (employees.length <= 0) return false;

  let highestId = Math.max.apply(Math, employees.map(empl => empl.id));

  let newId = highestId + 1;

  employee.id = newId;

  employees.push(employee);

  saveEmployees(employees);

  return true;
}

export function saveEmployees(employees: EmployeeModel[]) {
  setItem(EMPLOYEES_KEY, JSON.stringify(employees));
}

export function updateEmployees(employee: EmployeeModel): boolean {
  const employees = getEmployees();

  if (employees.length <= 0) return false;

  const newUpdatedEmployees = employees.map(obj => {
    if (obj.id === employee.id) {
      return { ...employee, id: obj.id };
    }

    return obj;
  });

  removeEmployees();
  saveEmployees(newUpdatedEmployees);
  return true;
}

export function deleteEmployee(id: number): boolean {
  const employees = getEmployees();

  if (employees.length <= 0) return false;

  const employeesFiltered = employees.filter(empl => empl.id !== id);

  saveEmployees(employeesFiltered);

  return true;
}

export function removeEmployees() {
  removeItem(EMPLOYEES_KEY);
}