import React from 'react'
import {createRoot} from 'react-dom/client'

import {Logo} from './components/logo'

function App() {
    const handleClick=(message) => {
        alert(message)
    }

    return (
        <div>
            <Logo width='80' height='80'/>
            <h1>Bookshelf</h1>

            <div>
                <button onClick={()=> handleClick('login clicked')}>Login</button>
            </div>

            <div>
                <button onClick={()=> handleClick('register clicked')}>Register</button>
            </div>
        </div>
    )
}

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(<App/>)