import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import RouteSearch from './routes/RouteSearch'
import RouteHome from './routes/RouteHome'
class BooksApp extends Component {

  
  state = {
    books: [],
    query:'',
    searchBooks:[]
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
      
  
  
  clearSearch = ()=>{
    this.setState({searchBooks : []})
  }

  render() {  
    
    return (
     
      <div className="app">
        <Routes>
          <Route exact  path='/' element={<RouteHome
                          books={this.state.books} 
                          func={this.shelfUpdater}
                          clearSearch={this.clearSearch}/> }/>
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
