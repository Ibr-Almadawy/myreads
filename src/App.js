import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import RouteSearch from './RouteSearch'
import RouteHome from './RouteHome'
class BooksApp extends Component {

  
  state = {
    showSearchPage: false,
    books: [],

  }
 
  componentDidMount(){
    BooksAPI.getAll().then((res)=>(
      this.setState({
        books:res
      } 
      ))  
    )

  }

  shelfUpdater = (b,s)=>{
   BooksAPI.update(b,s).then(()=>BooksAPI.getAll().then((res)=>(
      this.setState({
        books:res
      } 
      ))  
    ));
  }

  render() { 
    return (
      
      <div className="app">
        <Routes>
          <Route exact  path='/' element={<RouteHome books={this.state.books} func={this.shelfUpdater}/> }/>
          <Route exact path='/search' element={<RouteSearch/>}/>
        </Routes>
      </div>    
    )
  }
}

export default BooksApp;
