import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PlayersContextProvider from './context/PlayersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayersContextProvider>
      <App />
    </PlayersContextProvider>
  </React.StrictMode>
)
