import React , {Component} from 'react'
import Book from './AppBook';

// Crating and exporting search shelf with name of 'none' class 
class SearchShelf extends Component{
// Define 'resultManage' function to map over the books in search page after insure that it returns an array
resultManage =(sBooks)=>{
  // Handle no books with the current user entry to avoid error and return message
  const result = sBooks instanceof Array === true ? sBooks.map(bk=><Book key={bk.id} book={bk} func={this.props.func}/>)
  : <h1 className='no-books'>No books available for your entry ...<p className='try-again'>Try another search</p> </h1>
  
  return result
}
    render(){
        return(
         <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {/* Calling 'resultManage' function to show books in search shelf */}
              {this.resultManage(this.props.searchBooks)}
              </ol>
            </div>
          </div>
        )
     }
}
export default SearchShelf;