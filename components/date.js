import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  if (dateString.length === 4){
    return <time dateTime={dateString}>{format(date, 'yyyy')}</time>;
  }
  else{
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  }
}