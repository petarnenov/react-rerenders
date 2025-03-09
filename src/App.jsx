import React, { createContext, useState } from 'react'
import Counter from './components/Counter'
import ColorPicker from './components/ColorPicker'
import ColorsList from './components/ColorsList'
import './App.css'

export const AppContext = createContext({
  counter: 0,
  color: '#fff'
})

function App() {
  const [store, setStore] = useState({
    counter: 0,
    color: '#fff'
  })

  return (
    <AppContext.Provider value={{ store, setStore }}>
      <section>
        <ColorPicker />
        <Counter />
        <ColorsList />
      </section>
    </AppContext.Provider>
  )
}

export default App;
