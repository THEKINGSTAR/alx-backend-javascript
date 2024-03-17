export default function createEmployeesObject(departmentName, employees) {
  const empArr = [];

  for (const emp of employees) {
    empArr.push(emp);
  }

  const depEmps = {
    [departmentName]: empArr,
  };

  return depEmps;
}
