import '@reach/dialog/styles.css'
import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'
import {LoginForm} from './components/loginForm'

const LOGIN = 'login'
const REGISTER = 'register'
const NONE = 'none'

function App() {
  const [openModal, setOpenModal] = useState(NONE)
  const close = () => setOpenModal(NONE)

  const login = formData => {
    console.log('login', formData)
  }
  const register = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>

      <div>
        <button onClick={() => setOpenModal(LOGIN)}>Login</button>
      </div>

      <div>
        <button onClick={() => setOpenModal(REGISTER)}>Register</button>
      </div>

      <Dialog
        aria-label="Login form"
        isOpen={openModal === LOGIN}
        onDismiss={close}
      >
        <div>
          <button onClick={() => setOpenModal(NONE)}>Close</button>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText="Login" />
        </div>
      </Dialog>

      <Dialog
        aria-label="Register form"
        isOpen={openModal === REGISTER}
        onDismiss={close}
      >
        <div>
          <button onClick={() => setOpenModal(NONE)}>Close</button>

          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText="Register" />
        </div>
      </Dialog>
    </div>
  )
}

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(<App />)
