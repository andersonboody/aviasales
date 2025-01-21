import { CHEAP, FAST, OPTIMAL } from '../reducers/timeCostReducer'
import { normalize } from '../../utils/utils'

export const sortTicketMiddleware = (store) => (next) => (action) => {
  if (action.type === CHEAP || action.type === FAST || action.type === OPTIMAL) {
    const state = store.getState()
    const { filterTicket } = state.transfer
    let sortTicket = []
    if (action.type === CHEAP) {
      sortTicket = filterTicket.sort((a, b) => a.price - b.price)
    } else if (action.type === FAST) {
      sortTicket = filterTicket.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    } else if (action.type === OPTIMAL) {
      const minPrice = Math.min(...filterTicket.map((elem) => elem.price))
      const maxPrice = Math.max(...filterTicket.map((elem) => elem.price))
      const minTime = Math.min(...filterTicket.map((elem) => elem.segments[0].duration))
      const maxTime = Math.max(...filterTicket.map((elem) => elem.segments[0].duration))

      const scoreTicket = filterTicket.map((elem) => {
        const normalizePrice = normalize(elem.price, minPrice, maxPrice)
        const normalizeTime = normalize(elem.segments[0].duration, minTime, maxTime)
        const score = normalizePrice + normalizeTime
        return { ...elem, score: score }
      })
      sortTicket = scoreTicket.sort((a, b) => a.score - b.score)
    }
    store.dispatch({ type: 'SORTED_TICKETS', payload: sortTicket })
  }
  next(action)
}
