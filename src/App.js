// App is our first React Component
import logo from './logo.svg'
import './App.css'
import Header, { name } from './components/Header'

// a React Component can be as simple as a function returning some content

// DRY
// don't repeat yourself

// let name = 'Stefano'
let myOwnName = name('Stefano')

let clickFunction = () => alert('hello')

const App = () => (
  // this is called JSX
  // similar to HTML! some key differences:
  // css classes are called className
  // values can be put directly with curly brackets
  <>
    {/* the <> is called a React Fragment */}
    <div className="App">
      {/* here I'm using a react PROP */}
      {/* a prop for a component is like an attribute for an html tag */}
      {/* it's a way of passing a piece of info from a parent to a child */}
      <Header title="Strive" bottom={200} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {myOwnName}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <span>I'm a span</span>
        <ul>
          <li>I'm a list items</li>
        </ul>
        <button onClick={clickFunction}>CLICK ME!</button>
      </header>
      <Header title="React" bottom={100} />
    </div>
  </>
)

export default App
