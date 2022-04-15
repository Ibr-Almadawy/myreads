import React, {Component} from 'react'
import Book from './AppBook';
import {Link} from 'react-router-dom'
import SearchShelf from './AppSearchShelf';

class RouteSearch extends Component{
  // findBooks = ()=>{
  //    return ((this.props.books.length >0) ? (this.props.books.map(bk=><Book key={bk.id} book={bk} />)):(<h1>There is no books </h1>))
  // }
    render(){
        return(
            <div className="search-books">
                      <div className="search-books-bar">
                        <Link className="close-search" to='/' >Close</Link>
                        <div className="search-books-input-wrapper">
                          {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                          */}
                          <input type="text" placeholder="Search by title or author" onChange={this.props.queryFunc} onDragLeaveCapture={this.props.clear}/>
                          
                        </div>
                      </div>
                      <div className="search-books-results">
                        <ol className="books-grid"><SearchShelf  books={this.props.books} func={this.props.func}/></ol>
                      </div>
                    </div>
        )
    }
}
export default RouteSearch;