import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store()}>
      <App />
    </Provider>
  </React.StrictMode>
)
