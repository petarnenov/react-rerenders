import React, {Suspense} from 'react'
import Counter from './components/Counter'
import ColorPicker from './components/ColorPicker'
import ColorsList from './components/ColorsList'
import {AppContext} from './AppContext'
import CustomForm from './components/CustomForm'
import createStore from './store/store'
import './App.css'

const store = createStore()

function App() {

  return (
    <AppContext.Provider value={store}>
      <h1>React Rerenders</h1>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=4MmmlWwlST4&ab_channel=JackHerrington" target='blank'>Video "Check out React 18's useExternalStore hook with TypeScript and generics"</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=INLq9RPAYUw&t=554s&ab_channel=Theo-t3%E2%80%A4gg" target='blank'>Video "Why is every React site so slow?"</a>
        </li>
        <li>
          <a href="https://react-scan.com/">React Scan - cool rect tool</a>
        </li>
      </ul>
      <section>
        <ColorPicker />
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <ColorsList />
        </Suspense>
        <CustomForm />
      </section>
    </AppContext.Provider>
  )
}

export default App;
