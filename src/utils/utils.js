import { format, setMinutes } from 'date-fns'

const formatDate = (date, minutes) => {
  const getStartTime = format(date, 'hh:mm')
  const getDuration = setMinutes(date, minutes)
  const getFinishTime = format(getDuration, 'hh:mm')
  return `${getStartTime} - ${getFinishTime}`
}

const countTime = (time) => {
  const hour = Math.trunc(time / 60)
  const minutes = time % 60
  return `${hour}ч ${minutes}мин`
}

const countTransfers = (count) => {
  if (count === 0) {
    return 'Пересадок нет'
  } else if (count === 1) {
    return `${count} пересадка`
  } else {
    return `${count} пересадки`
  }
}

const normalize = (value, min, max) => {
  if (min === max) return 0
  return (value - min) / (max - min)
}

export { formatDate, countTime, countTransfers, normalize }
