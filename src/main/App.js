import React from 'react'
import Rotas from '../main/rotas'
import Navbar from '../components/navbar'
import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min'

class App extends React.Component {


  render() {
    return (
      <>
        <Navbar/>
        <div className='container'>
          <Rotas />
        </div>
      </>
    );
  }
}

export default App;
