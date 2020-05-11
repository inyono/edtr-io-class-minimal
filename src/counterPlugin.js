import { number } from '@edtr-io/plugin'
import React from 'react'

const counterState = number(0)

// Your own plugins can be classes, too, as long as you don't use any Edtr.io hook
class CounterEditor extends React.Component {
  render() {
    const { editable, focused, state } = this.props

    return (
      <React.Fragment>
        Current counter value:
        {editable ? (
          <button
            onClick={() => {
              state.set((value) => value - 1)
            }}
          >
            -
          </button>
        ) : null}
        {state.value}
        {editable ? (
          <button
            onClick={() => {
              state.set((value) => value + 1)
            }}
          >
            +
          </button>
        ) : null}
      </React.Fragment>
    )
  }
}

const counterPlugin = {
  Component: CounterEditor,
  config: {},
  state: counterState,
}

export default counterPlugin
