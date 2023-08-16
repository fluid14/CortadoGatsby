export const firstDayNextMonth = () => {
  const nextMonth = new Date().getMonth() + 1;
  const year = new Date().getFullYear() + (nextMonth === 12 ? 1 : 0);
  return new Date(year, nextMonth % 12, 1);
};

export const formatDate = (date = new Date()) => {
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return [day, month, year].join('.');
};
