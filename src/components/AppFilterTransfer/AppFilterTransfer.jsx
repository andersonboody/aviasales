import { useDispatch, useSelector } from 'react-redux'

import classes from '../../styles/AppFilterTransfer.module.scss'
import { filterTransferTicket } from '../../store/actions/filterTransferAction'

const AppFilterTransfer = () => {
  const {
    transferCheckbox: { all, noTransfer, oneTransfer, twoTransfer, treeTransfer },
  } = useSelector((state) => state.transfer)
  const dispatch = useDispatch()

  const onFilterTicket = (value) => {
    dispatch(filterTransferTicket(value))
  }
  return (
    <div className={classes['filter-transfer']}>
      <p className={classes['filter-transfer__title']}>Количество пересадок</p>
      <ul className={classes['filter-transfer__list']}>
        <li>
          <label className={classes['filter-transfer__list-item']}>
            <input
              type="checkbox"
              className={classes['filter-transfer__list-checkbox']}
              onChange={() => onFilterTicket('transfer-all')}
              checked={all}
            />
            <span className={classes['filter-transfer__list-name']}>Все</span>
          </label>
        </li>
        <li>
          <label className={classes['filter-transfer__list-item']}>
            <input
              type="checkbox"
              className={classes['filter-transfer__list-checkbox']}
              onChange={() => onFilterTicket('transfer-no')}
              checked={noTransfer}
            />
            <span className={classes['filter-transfer__list-name']}>Без пересадок</span>
          </label>
        </li>
        <li>
          <label className={classes['filter-transfer__list-item']}>
            <input
              type="checkbox"
              className={classes['filter-transfer__list-checkbox']}
              onChange={() => onFilterTicket('transfer-one')}
              checked={oneTransfer}
            />
            <span className={classes['filter-transfer__list-name']}>1 пересадка</span>
          </label>
        </li>
        <li>
          <label className={classes['filter-transfer__list-item']}>
            <input
              type="checkbox"
              className={classes['filter-transfer__list-checkbox']}
              onChange={() => onFilterTicket('transfer-two')}
              checked={twoTransfer}
            />
            <span className={classes['filter-transfer__list-name']}>2 пересадка</span>
          </label>
        </li>
        <li>
          <label className={classes['filter-transfer__list-item']}>
            <input
              type="checkbox"
              className={classes['filter-transfer__list-checkbox']}
              onChange={() => onFilterTicket('transfer-tree')}
              checked={treeTransfer}
            />
            <span className={classes['filter-transfer__list-name']}>3 пересадка</span>
          </label>
        </li>
      </ul>
    </div>
  )
}
export default AppFilterTransfer
