import React from 'react'
import {render} from 'react-dom'

const App = ()=>
  <h1>Here at {new Date().toLocaleDateString()}</h1>


const element = document.getElementById('app')

render(<App/>, element)
