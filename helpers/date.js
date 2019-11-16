import leftPad from 'left-pad';

export const generateFutureDates = () => {
  const date = new Date();
  const futureMonth = date.getMonth() + 2;
  const currentYear = date.getFullYear();
  const isNewYear = futureMonth > 12;

  return {
    year: (isNewYear ? currentYear + 1 : currentYear).toString(),
    month: leftPad(isNewYear ? 1 : futureMonth, 2, '0'),
  };
};
