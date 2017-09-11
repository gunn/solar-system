import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      width:  window.innerWidth,
      height: window.innerHeight
    }
  }

  componentDidMount() {
    window.addEventListener("resize", ()=> {
      this.setState({
        width:  window.innerWidth,
        height: window.innerHeight
      })
    })
  }

  render() {
    const {style} = this.props

    return (
      <div>
        <style>{style}</style>
        <h1>Solar System</h1>
    
        <SolarSystem {...this.state} />
      </div>
    )
  }
}

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

const SolarSystem = ({width, height})=> {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width/2} ${height/2})`}>
        {
          PLANETS.map((props, i)=> (
            <Planet key={i} {...props}/>
          ))
        }
      </g>
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
`


const element = document.getElementById('app')
render(<App style={STYLES}/>, element)
