import { format } from 'date-fns';

// Takes a unix date in miliseconds and formats it.
const formatDate = (date: number | Date, formatStr = 'yyyy-MM-dd') => {
  return format(date, formatStr);
};
export default formatDate;
