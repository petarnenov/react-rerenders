//https://www.youtube.com/watch?v=4MmmlWwlST4&ab_channel=JackHerrington
//https://www.youtube.com/watch?v=INLq9RPAYUw&t=554s&ab_channel=Theo-t3%E2%80%A4gg
//https://react-scan.com/
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
