// App is our first React Component
import logo from './logo.svg'
import './App.css'

// a React Component can be as simple as a function returning some content
function App() {
  return (
    // this is called JSX
    // similar to HTML! some key differences:
    // css classes are called className
    // values can be put directly with curly brackets
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Strivers!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
