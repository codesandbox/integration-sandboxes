import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#8787d8'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm A fade Transition!
      </div>
    )}
  </Transition>
);

class Example extends React.Component {
  state = { show: false }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }
  
  render() {
    const { show } = this.state
    return (
      <div>
        <button onClick={() => this.handleToggle()}>
          Click to toggle
        </button>
        <div>
          <Fade in={!!show} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))