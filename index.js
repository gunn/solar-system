import React from 'react'
import {render} from 'react-dom'

const App = ({style})=>
  <div>
    <style>{style}</style>
    <h1>Solar System</h1>

    <SolarSystem />
  </div>

const PLANETS = []

const SolarSystem = ()=> {
  return (
    <svg>
      {
        PLANETS.map((props, i)=> (
          <Planet key={i} {...props}/>
        ))
      }
    </svg>
  )
}

const Planet = props=>
  <g>
    <Body />
    <Orbit />
  </g>

const Body = ()=>
  <circle className="planet" r={10} fill="#06f" />

const Orbit = ()=>
  <circle className="orbit" />


const STYLES = `
  html, body {
    color: #CCC;
    background-color: #000;
  }
`


const element = document.getElementById('app')
render(<App style={STYLES}/>, element)
