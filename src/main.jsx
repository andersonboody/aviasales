import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store'
import './styles/main.scss'
import App from './components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
