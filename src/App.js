import React from 'react'
import Editor from './Editor'
import './App.css'

// Your other app can be a class component
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>
          Edit <code>src/Editor.js</code> and save to reload.
        </p>
        <Editor />
      </div>
    )
  }
}

export default App
