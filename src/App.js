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
      query : event.target.value
    }); 
     BooksAPI.search(event.target.value)
    .then((boks)=>{this.setState({searchBooks:boks})})
  }
  clearQuery =()=>{
    this.setState({
      query : ''
    })
  }



  render() { 
    return (
      
      <div className="app">
        <Routes>
          <Route exact  path='/' element={<RouteHome
                        books={this.state.books} 
                        func={this.shelfUpdater}/> }/>
          <Route exact path='/search' 
                        element={<RouteSearch 
                        queryString={this.state.query} 
                        books={this.state.searchBooks} 
                        queryFunc={this.searchQuery}/>}
                        clear={this.clearQuery}
                        func={this.shelfUpdater}/>{console.log(this.state.query,this.state.searchBooks)}
        </Routes>
      </div>    
    )
  }
}

export default BooksApp;
