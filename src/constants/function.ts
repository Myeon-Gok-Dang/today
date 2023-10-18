export const getDaysInMonth = (year: number, month: number) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysArray = [];

  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }
  const prevDow = new Date(year, month - 1, 1).getDay();
  const nextDow = new Date(
    year,
    month - 1,
    daysArray[daysArray.length - 1]
  ).getDay();

  return { arr: daysArray, prevDow: prevDow, nextDow: nextDow };
};
