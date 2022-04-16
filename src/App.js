import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import RouteSearch from './routes/RouteSearch'
import RouteHome from './routes/RouteHome'

// Creating and exporting App component class
class BooksApp extends Component {

  // Define App state with 3 states 
  state = {
    books: [],
    query:'',
    searchBooks:[]
  }
  // Call getAll API to get books when components did mount and set the result to state
  componentDidMount(){
    BooksAPI.getAll().then((res)=>(
      this.setState({
        books:res
      } 
      ))  
    )
  }
// define 'shelfUpdater' function to update the home book shelf by calling update API
  shelfUpdater = (b,s)=>{
   BooksAPI.update(b,s).then(()=>BooksAPI.getAll().then((res)=>(
      this.setState({
        books:res
      } 
      ))  
    ));
  }


// Define 'searchQuery' function to call search API to return books based on query 
// Handle error to give every book on shelf inside home to has same value in search page
// Handel error fetching data of empty string when user backspace the whole string
  searchQuery = (event)=>{
      this.setState({
        query : event.target.value,  
      }); 
      event.target.value.length === 0 ? this.setState({searchBooks:[]}): BooksAPI.search(event.target.value)
        .then((boks)=>{
         boks = boks instanceof Array === true ? boks.map((bok)=>{
          return  this.state.books.forEach((book)=>{ book.id === bok.id && (bok.shelf = book.shelf );})
           }) && this.setState({searchBooks:boks}) :this.setState({searchBooks:boks})
        }) 
    }
      
  
  // Define 'clearSearch' function to clear the search page when returning to homepage 
  clearSearch = ()=>{
    this.setState({searchBooks : []})
  }

  render() {  
    
    return (
     
      <div className="app">
        {/* Set routes */} 
        <Routes>
          {/* Home route */}
          <Route exact  path='/' element={<RouteHome
                          books={this.state.books} 
                          func={this.shelfUpdater}
                          clearSearch={this.clearSearch}/> }/>
          {/* Search route */}
          <Route exact path='/search' element={<RouteSearch 
                                        searchBooks={this.state.searchBooks} 
                                        queryFunc={this.searchQuery}
                                        func={this.shelfUpdater}/>}/>
        </Routes>
      </div>    
    )
  }
}

export default BooksApp;
