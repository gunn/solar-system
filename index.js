import React from 'react'
import {render} from 'react-dom'

const App = ({style})=>
  <div>
    <style>{style}</style>
    <h1>Solar System</h1>

    <SolarSystem />
  </div>

const PLANETS = [
  {
    name: "Earth",
    radius: 6371,
    color: "#06f",
    orbit: {
      a: 149598023
    }
  },
  {
    name: "Mars",
    radius: 3389.5,
    color: "#C00",
    orbit: {
      a: 227939200
    }
  }
]

const bodyProps  = ({radius, color: fill})=> (
  {r: radius/400, fill}
)
const orbitProps = ({orbit: {a}, color: stroke})=> (
  {r: a/500000, fill: "none", stroke, strokeWidth: 1}
)

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
    <Body  {...bodyProps(props) }/>
    <Orbit {...orbitProps(props)}/>
  </g>

const Body = props=>
  <circle {...props}/>

const Orbit = props=>
  <circle {...props} />


const STYLES = `
  html, body {
    color: #CCC;
    background-color: #000;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  svg {
    width: 100%;
    height: 1000px;
  }
`


const element = document.getElementById('app')
render(<App style={STYLES}/>, element)
