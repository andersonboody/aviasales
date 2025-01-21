import { FETCH_TICKET } from './ticketReducer'

const TRANSFER_ALL = 'TRANSFER_ALL'
const TRANSFER_NO = 'TRANSFER_NO'
const TRANSFER_ONE = 'TRANSFER_ONE'
const TRANSFER_TWO = 'TRANSFER_TWO'
const TRANSFER_TREE = 'TRANSFER_TREE'
const SHOW_TICKET = 'SHOW_TICKET'
const SORTED_TICKETS = 'SORTED_TICKETS'

const defaultState = {
  ticket: [],
  filterTicket: [],
  displayTicket: [],
  transferCheckbox: {
    all: false,
    noTransfer: false,
    oneTransfer: false,
    twoTransfer: false,
    treeTransfer: false,
  },
  ticketShow: 10,
}

const transferReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case FETCH_TICKET:
      return {
        ...state,
        ticket: actions.payload,
      }
    case TRANSFER_ALL:
      return filterAllCheckbox(state)
    case TRANSFER_NO:
      return filterTicketFn(state, 0, !state.transferCheckbox.noTransfer)
    case TRANSFER_ONE:
      return filterTicketFn(state, 1, !state.transferCheckbox.oneTransfer)
    case TRANSFER_TWO:
      return filterTicketFn(state, 2, !state.transferCheckbox.twoTransfer)
    case TRANSFER_TREE:
      return filterTicketFn(state, 3, !state.transferCheckbox.treeTransfer)
    case SORTED_TICKETS:
      return {
        ...state,
        filterTicket: actions.payload,
        displayTicket: actions.payload.slice(0, 5),
      }
    case SHOW_TICKET: {
      const addFiveTicket = state.filterTicket.slice(0, state.ticketShow)
      return { ...state, displayTicket: addFiveTicket, ticketShow: state.ticketShow + 5 }
    }
    default:
      return state
  }
}

const filterTicketFn = (state, value, isChecked) => {
  const { ticket, transferCheckbox } = state
  let newFilterTicket = []

  const upTransferCheckbox = {
    ...transferCheckbox,
    noTransfer: value === 0 ? isChecked : transferCheckbox.noTransfer,
    oneTransfer: value === 1 ? isChecked : transferCheckbox.oneTransfer,
    twoTransfer: value === 2 ? isChecked : transferCheckbox.twoTransfer,
    treeTransfer: value === 3 ? isChecked : transferCheckbox.treeTransfer,
  }
  const activeFilters = Object.keys(upTransferCheckbox).filter((key) => upTransferCheckbox[key])
  const activeAllFilter = activeFilters.length === 4 && activeFilters[0] !== 'all' ? true : false

  if (activeFilters.length > 0) {
    newFilterTicket = ticket.filter((elem) => {
      return activeFilters.some((filter) => {
        let count
        if (filter === 'noTransfer') count = 0
        if (filter === 'oneTransfer') count = 1
        if (filter === 'twoTransfer') count = 2
        if (filter === 'treeTransfer') count = 3
        return elem.segments[0].stops.length === count
      })
    })
  } else {
    newFilterTicket = []
  }

  return {
    ...state,
    filterTicket: newFilterTicket,
    displayTicket: newFilterTicket.slice(0, 5),
    transferCheckbox: { ...upTransferCheckbox, all: activeAllFilter },
  }
}

const filterAllCheckbox = (state) => {
  const { ticket, transferCheckbox } = state
  const isAllChecked = !transferCheckbox.all

  return {
    ...state,
    filterTicket: isAllChecked ? ticket : [],
    displayTicket: isAllChecked ? ticket.slice(0, 5) : [],
    transferCheckbox: {
      all: isAllChecked,
      noTransfer: isAllChecked,
      oneTransfer: isAllChecked,
      twoTransfer: isAllChecked,
      treeTransfer: isAllChecked,
    },
  }
}

const showTicket = () => ({ type: SHOW_TICKET })

export {
  TRANSFER_ALL,
  TRANSFER_NO,
  TRANSFER_ONE,
  TRANSFER_TWO,
  TRANSFER_TREE,
  SHOW_TICKET,
  transferReducer,
  showTicket,
}
