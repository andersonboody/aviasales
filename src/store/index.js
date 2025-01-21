import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'

import { rootReducer } from './reducers'
import { sortTicketMiddleware } from './sortTicketMiddleware/sortTicketMiddleware'

// Для работы в деве с девтолсом
// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose

export const store = createStore(rootReducer, applyMiddleware(thunk, sortTicketMiddleware))
