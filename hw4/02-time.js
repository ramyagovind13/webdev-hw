const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const [year1, month1] = [d1.getFullYear(), d1.getMonth()];
  const [year2, month2] = [d2.getFullYear(), d2.getMonth()];
  const diff = d1.getTime() - d2.getTime();
  const diffDate = new Date(diff);
  const [year, month] = [diffDate.getFullYear(), diffDate.getMonth()];

  if (!isNaN(year)) {
    if (year - 1970 == 0) {
      return "Time elapsed: " + month + " months";
    } else if (month == 0) {
      return "Time elapsed: " + (year - 1970) + " years";
    } else {
      return "Time elapsed: " + (year - 1970) + " years, " + month + " months";
    }
  } else {
    return "Error: Invalid input provided.";
  }
};

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.
