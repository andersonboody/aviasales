import classes from '../../styles/AppTicket.module.scss'
import { formatDate, countTime, countTransfers } from '../../utils/utils.js'

const AppTicket = ({ ticket }) => {
  return (
    <>
      {ticket.map((elem, index) => (
        <div className={classes.ticket} key={index}>
          <div className={classes['ticket__header']}>
            <h3 className={classes['ticket__header-price']}>{`${elem.price.toLocaleString('ru')} P`}</h3>
            <img
              src={`https://pics.avs.io/99/36/${elem.carrier}.png`}
              alt="Company"
              className={classes['ticket__header-company']}
            />
          </div>
          <div className={classes['ticket__main']}>
            {elem.segments.map((el, i) => (
              <div key={i} className={classes['ticket__segment']}>
                <div className={classes['ticket__segment-column']}>
                  <span className={classes['ticket__segment-column-title']}>{`${el.origin} - ${el.destination}`}</span>
                  <span className={classes['ticket__segment-column-data']}>{formatDate(el.date, el.duration)}</span>
                </div>
                <div className={classes['ticket__segment-column']}>
                  <span className={classes['ticket__segment-column-title']}>в пути</span>
                  <span className={classes['ticket__segment-column-data']}>{countTime(el.duration)}</span>
                </div>
                <div className={classes['ticket__segment-column']}>
                  <span className={classes['ticket__segment-column-title']}>{countTransfers(el.stops.length)}</span>
                  <span className={classes['ticket__segment-column-data']}>{el.stops.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
export default AppTicket
