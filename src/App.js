import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/login'

class App extends React.Component {

  state = {
    numero1: null,
    numero2: null,
    resultado: null
  }

  somar = () => {
    this.setState({resultado: parseInt(this.state.numero1)+parseInt(this.state.numero2)})
  }

  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
}

export default App;
