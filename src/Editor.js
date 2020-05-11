import { Editor as Core } from '@edtr-io/core'
import { createTextPlugin } from '@edtr-io/plugin-text'
import React from 'react'
import counterPlugin from './counterPlugin'

const textPlugin = createTextPlugin({
  placeholder: 'Hello world',
  registry: [],
})

const plugins = {
  counter: counterPlugin,
  text: textPlugin,
}

// Editor itself can also be a class component as long as you don't use any Edtr.io hook
class Editor extends React.Component {
  render() {
    return <Core plugins={plugins} initialState={this.props.initialState} />
  }
}

export default Editor
