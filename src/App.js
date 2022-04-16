import React ,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import RouteSearch from './RouteSearch'
import RouteHome from './RouteHome'
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
    .then((boks)=>
      this.setState({searchBooks:boks}))
  }
  

  render() {  
    
    return (
     
      <div className="app">
        <Routes>
          <Route exact  path='/' element={<RouteHome
                          books={this.state.books} 
                          func={this.shelfUpdater}/> }/>
          <Route exact path='/search' element={<RouteSearch 
                                        sQuery={this.state.query} 
                                        books={this.state.searchBooks} 
                                        queryFunc={this.searchQuery}
                                        func={this.shelfUpdater}/>}
/>
        </Routes>
      </div>    
    )
  }
}

export default BooksApp;
