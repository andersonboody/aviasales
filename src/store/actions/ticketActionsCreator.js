import axios from 'axios'

import {
  FETCH_TICKETS_LOADING,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_SUCCESS,
  FETCH_SCALE,
  FETCH_TICKET,
} from '../reducers/ticketReducer'
import { AppNotification } from '../../components/ui/ui'

export const fetchTicket = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_TICKETS_LOADING })
      await getSearchId()

      // Для настройки проекта(пачка билетов 500шт)
      // const response = await getTicket()
      // dispatch({ type: FETCH_TICKET, payload: response.tickets })
      // dispatch({ type: FETCH_TICKETS_SUCCESS })

      // Фулл пачка билетов примерно 11тыс.шт.
      let allTickets = []
      let stop = false
      let scale = 0
      const intervalId = setInterval(async () => {
        const ticketResponse = await getTicket()

        allTickets = [...allTickets, ...ticketResponse.tickets]
        scale += 5
        dispatch({ type: FETCH_SCALE, payload: scale })
        dispatch({ type: FETCH_TICKET, payload: allTickets })
        stop = ticketResponse.stop
        if (stop) {
          clearInterval(intervalId)
          dispatch({ type: FETCH_TICKETS_SUCCESS })
          AppNotification()
        }
      }, 1000)
    } catch (err) {
      dispatch({ type: FETCH_TICKETS_ERROR, payload: err.message })
    }
  }
}

const getSearchId = async () => {
  const response = await axios.get('https://aviasales-test-api.kata.academy/search').catch((error) => {
    throw new Error(error.message)
  })
  localStorage.setItem('searchId', response.data.searchId)
}
const getTicket = async () => {
  const searchId = localStorage.getItem('searchId')
  const response = await axios
    .get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    .catch((error) => {
      throw new Error(error.message)
    })
  return response.data
}
