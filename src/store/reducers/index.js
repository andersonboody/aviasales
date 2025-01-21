import { combineReducers } from 'redux'

import { timeCostReducer } from './timeCostReducer'
import { transferReducer } from './transferReducer'
import { ticketReducer } from './ticketReducer'

export const rootReducer = combineReducers({
  timeCost: timeCostReducer,
  transfer: transferReducer,
  ticket: ticketReducer,
})
