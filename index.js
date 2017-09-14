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

        <SolarSystem {...this.state} />
      </div>
    )
  }
}

const PLANETS = [{
  name: "Sun",
    radius: 16371,
    color: "#DD5",
    orbit: {
      a: 0,
      P: 0
    }
  },
  {
  name: "Mercury",
    radius: 2440,
    color: "#fecdf5",
    orbit: {
      a: 57909050,
      P: 0.240846
    }
  },
  {
  name: "Venus",
    radius: 6052,
    color: "#fefe00",
    orbit: {
      a: 108208000,
      P: 0.615
    }
  },
  {
    name: "Earth",
    radius: 6371,
    color: "#06f",
    orbit: {
      a: 149598023,
      P: 1
    }
  },
  {
    name: "Mars",
    radius: 3389.5,
    color: "#C00",
    orbit: {
      a: 227939200,
      P: 1.881
    }
  }
]

const bodyProps  = ({orbit: {a, P}, radius, color: fill})=> {
  const displayOrbitRadius = a/800000
  const t = new Date() / 1000

  return {
    r: radius/400,
    cx: Math.sin(t / P) * displayOrbitRadius,
    cy: Math.cos(t / P) * displayOrbitRadius,
    fill
  }
}

const orbitProps = ({orbit: {a}, color: stroke})=> {
  return {
    r: a/800000,
    fill: "none",
    stroke,
    strokeWidth: 1,
    strokeOpacity: 0.5
  }
}

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


const element = document.getElementById('app');

(function doRender() {
  render(<App style={STYLES}/>, element)
  window.requestAnimationFrame(doRender)
})()
