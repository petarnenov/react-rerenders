//https://www.youtube.com/watch?v=4MmmlWwlST4&ab_channel=JackHerrington
//https://www.youtube.com/watch?v=INLq9RPAYUw&t=554s&ab_channel=Theo-t3%E2%80%A4gg
//https://react-scan.com/
import React from 'react'
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
          <a href="https://www.youtube.com/watch?v=4MmmlWwlST4&ab_channel=JackHerrington">Video 1</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=INLq9RPAYUw&t=554s&ab_channel=Theo-t3%E2%80%A4gg">Video 2</a>
        </li>
        <li>
          <a href="https://react-scan.com/">React Scan</a>
        </li>
      </ul>
      <section>
        <ColorPicker />
        <Counter />
        <ColorsList />
        <CustomForm />
      </section>
    </AppContext.Provider>
  )
}

export default App;
