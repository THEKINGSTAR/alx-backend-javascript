export default function createEmployeesObject(departmentName, employees) {
  const emd_dp = {
    [departmentName]: employees.map(emp => ({ ...emp })),
  };

  return emd_dp;
}

