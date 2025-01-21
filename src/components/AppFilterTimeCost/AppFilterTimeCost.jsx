const AppFilterTimeCost = ({ onSortTimeCost, sortType }) => {
  return (
    <div>
      <button
        className={`btn btn-filter ${sortType === 'cheap' && 'btn-filter--active'}`}
        onClick={() => onSortTimeCost('cheap')}
      >
        Самый дешевый
      </button>
      <button
        className={`btn btn-filter ${sortType === 'fast' && 'btn-filter--active'}`}
        onClick={() => onSortTimeCost('fast')}
      >
        Самый быстрый
      </button>
      <button
        className={`btn btn-filter ${sortType === 'optimal' && 'btn-filter--active'}`}
        onClick={() => onSortTimeCost('optimal')}
      >
        Оптимальный
      </button>
    </div>
  )
}
export default AppFilterTimeCost
