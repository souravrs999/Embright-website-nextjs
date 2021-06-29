export default function dateFormatter(date) {
  const monthArray = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  var [year, month, day] = date.split("-");
  month = monthArray[parseInt(month) - 1];
  return String(day + " " + month + " " + year);
}
