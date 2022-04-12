import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import RouteSearch from './RouteSearch'
import RouteHome from './RouteHome'
class BooksApp extends React.Component {

  
  state = {
    showSearchPage: false,
    books: [],
    currentlyReading:[],
    wantToRead:[],
    read:[]
  }
 
  componentDidMount(){
    BooksAPI.getAll().then((res)=>(
      this.setState({
        books:res,
        currentlyReading:res.filter((b)=>(b.shelf === 'currentlyReading')),
        wantToRead:res.filter((b)=>(b.shelf === 'wantToRead')),
        read:res.filter((b)=>(b.shelf === 'read'))
      } 
      ))  
    )

  }


  render() { //console.log(this.state.currentlyReading)

    return (
      
      <div className="app">
        <Routes>
          <Route exact  path='/' element={<RouteHome/>}/>
          <Route exact path='/search' element={<RouteSearch/>}/>
        </Routes>
      </div>    
    )
  }
}

export default BooksApp;
