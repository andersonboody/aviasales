import { TRANSFER_NO, TRANSFER_ALL, TRANSFER_ONE, TRANSFER_TWO, TRANSFER_TREE } from '../reducers/transferReducer'

export const filterTransferTicket = (checkbox) => {
  return (dispatch) => {
    if (checkbox === 'transfer-all') {
      return dispatch({ type: TRANSFER_ALL })
    } else if (checkbox === 'transfer-no') {
      return dispatch({ type: TRANSFER_NO })
    } else if (checkbox === 'transfer-one') {
      return dispatch({ type: TRANSFER_ONE })
    } else if (checkbox === 'transfer-two') {
      return dispatch({ type: TRANSFER_TWO })
    } else {
      return dispatch({ type: TRANSFER_TREE })
    }
  }
}
