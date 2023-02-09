import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'szostak-atoms/button'
import { Stack } from 'szostak-atoms/stack'
// import { Button } from 'szostak-atoms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Typescript + MUI 5</h1>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Stack direction="column">
        <Button>Btn1</Button>
        <Button>Btn2</Button>
        <Button>Btn3</Button>
      </Stack>
      <Stack direction="row-reverse">
        <Button>Btn1</Button>
        <Button>Btn2</Button>
        <Button>Btn3</Button>
      </Stack>
    </div>
  )
}

export default App
