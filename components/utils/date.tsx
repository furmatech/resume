import {parseISO, format, intervalToDuration} from 'date-fns'

type DateTypes = {
  dateString: string,
  dateFormat?: string
}

const DateFormat = ({dateString, dateFormat = 'LLLL d, yyyy'}: DateTypes) =>
  <time dateTime={dateString}>{format(parseISO(dateString), dateFormat)}</time>


export default DateFormat


export const diffYearsAndMonths = (dateStart: string, dateEnd: string) => {
  if (!dateEnd) dateEnd = new Date().toISOString()

  const diff = intervalToDuration({"start": parseISO(dateStart), "end": parseISO(dateEnd)})

  return `${diff.years ? diff.years + ` year${diff.years === 1 ? '' : 's'}` : ''} ${diff.months ? diff.months + ` month${diff.months === 1 ? '' : 's'}` : ''}`
}
