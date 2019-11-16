import { generateFutureDates } from 'helpers/date';

export const buildLink = (template = '', state = {}) => {
  const { year, month } = generateFutureDates();
  const { microsite, clientID, version } = state;

  return template
    .replace(/\{website\}/g, microsite)
    .replace(/\{year\}/g, year)
    .replace(/\{month\}/g, month)
    .replace(/\{version\}/g, version ? `&version=${version}&` : '')
    .replace(/\{clientID\}/g, clientID);
};
