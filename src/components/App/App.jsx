import classes from '../../styles/App.module.scss'
import logo from '../../assets/images/logo.svg'
import AppFilterTransfer from '../AppFilterTransfer/AppFilterTransfer'
import AppList from '../AppList/AppList'

function App() {
  return (
    <div className={classes.container}>
      <header className="header">
        <img src={logo} alt="Logo" className={classes['header-logo']} />
      </header>
      <main className={classes.main}>
        <AppFilterTransfer />
        <AppList />
      </main>
    </div>
  )
}

export default App
