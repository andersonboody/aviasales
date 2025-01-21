const CHEAP = 'CHEAP'
const FAST = 'FAST'
const OPTIMAL = 'OPTIMAL'

const defaultState = {
  sortType: null,
}

const timeCostReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case CHEAP: {
      return {
        sortType: 'cheap',
      }
    }
    case FAST: {
      return {
        sortType: 'fast',
      }
    }
    case OPTIMAL: {
      return {
        sortType: 'optimal',
      }
    }
    default:
      return state
  }
}

export { CHEAP, FAST, OPTIMAL, timeCostReducer }
