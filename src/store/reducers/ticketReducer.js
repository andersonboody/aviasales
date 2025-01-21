const FETCH_TICKETS_LOADING = 'FETCH_TICKETS_LOADING'
const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
const FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR'
const FETCH_SCALE = 'FETCH_SCALE'
const FETCH_TICKET = 'FETCH_TICKET'

const initialState = {
  loading: false,
  scale: 0,
  error: null,
}

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_LOADING:
      return { ...state, loading: true, error: null }
    case FETCH_TICKETS_SUCCESS:
      return {
        loading: false,
        scale: 0,
        error: null,
      }
    case FETCH_TICKETS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case FETCH_SCALE:
      return { ...state, scale: action.payload }
    default:
      return state
  }
}

export { FETCH_TICKETS_LOADING, FETCH_TICKETS_ERROR, FETCH_TICKETS_SUCCESS, FETCH_SCALE, FETCH_TICKET, ticketReducer }
