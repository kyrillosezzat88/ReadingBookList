import React, {Component} from 'react';
import BookContextProvider from './Context/BookContext'
import Navbar from './Components/Navbar'
import BookList from './Components/BookList'
import BookForm from './Components/BookForm';
class App extends Component{
  render(){
    return (
      <div className="App">
        <BookContextProvider>
          <Navbar/>
          <BookList/>
          <BookForm/>
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
