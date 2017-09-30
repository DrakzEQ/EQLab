import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-select/dist/react-select.css'
import 'font-awesome/css/font-awesome.min.css'
import EQLab from './_EQLab/EQLab.jsx'

const socket = io.connect(process.env.SOCKET_URL);

ReactDOM.render((

  <Provider store={store}>
    <BrowserRouter>
      <SocketProvider socket={socket}>
        <EQLab />
      </SocketProvider>
    </BrowserRouter>
  </Provider>


), document.getElementById('index'));

registerServiceWorker();