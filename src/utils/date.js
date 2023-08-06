export const firstDayNextMonth = () => {
  const nextMonth = new Date().getMonth() + 1;
  const year = new Date().getFullYear() + (nextMonth === 12 ? 1 : 0);
  return new Date(year, nextMonth % 12, 1);
};
