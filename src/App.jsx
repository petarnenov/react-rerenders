import React from 'react'
import Counter from './components/Counter'
import ColorPicker from './components/ColorPicker'
import ColorsList from './components/ColorsList'
import { AppContext } from './AppContext'
import store from './store/store'
import './App.css'

function App() {

  return (
    <AppContext.Provider value={store}>
      <section>
        <ColorPicker />
        <Counter />
        <ColorsList />
      </section>
    </AppContext.Provider>
  )
}

export default App;
