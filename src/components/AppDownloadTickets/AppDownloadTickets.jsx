import { useDispatch } from 'react-redux'

import { showTicket } from '../../store/reducers/transferReducer.js'

const AppDownloadTickets = () => {
  const dispatch = useDispatch()
  const onShowTicket = () => {
    dispatch(showTicket())
  }
  return (
    <button className="btn btn-dropdown" onClick={onShowTicket}>
      Показать еще 5 билетов!
    </button>
  )
}
export default AppDownloadTickets
