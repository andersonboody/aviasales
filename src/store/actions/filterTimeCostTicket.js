import { CHEAP, FAST, OPTIMAL } from '../reducers/timeCostReducer'

export const sortTimeCostTacket = (sortType) => {
  return (dispatch) => {
    if (sortType === 'cheap') {
      return dispatch({ type: CHEAP })
    } else if (sortType === 'fast') {
      dispatch({ type: FAST })
    } else {
      dispatch({ type: OPTIMAL })
    }
  }
}
