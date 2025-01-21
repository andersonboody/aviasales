import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AppFilterTimeCost from '../AppFilterTimeCost/AppFilterTimeCost'
import AppTicket from '../AppTicket/AppTicket'
import AppDownloadTickets from '../AppDownloadTickets/AppDownloadTickets'
import classes from '../../styles/AppList.module.scss'
import { fetchTicket } from '../../store/actions/ticketActionsCreator'
import { AppError, AppSpin } from '../ui/ui.jsx'
import { sortTimeCostTacket } from '../../store/actions/filterTimeCostTicket.js'

const AppList = () => {
  const { loading, error, scale } = useSelector((state) => state.ticket)
  const { sortType } = useSelector((state) => state.timeCost)
  const { displayTicket } = useSelector((state) => state.transfer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTicket())
  }, [dispatch])

  const onSortTimeCost = (filter) => {
    dispatch(sortTimeCostTacket(filter))
  }

  return (
    <div>
      <AppFilterTimeCost onSortTimeCost={onSortTimeCost} sortType={sortType} />
      {loading && <AppSpin scale={scale} />}
      {error && <AppError error={error} />}
      {displayTicket.length > 0 && (
        <div className={classes['list__card']}>
          <AppTicket ticket={displayTicket} />
          <AppDownloadTickets />
        </div>
      )}
      {displayTicket.length === 0 && !error && (
        <div className={classes['list__empty']}>
          <h3>Выберите колличество пересадок, что мы смогли вам подобрать необходимые билеты! </h3>
        </div>
      )}
    </div>
  )
}
export default AppList
