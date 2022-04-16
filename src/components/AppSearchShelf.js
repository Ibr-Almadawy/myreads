import React , {Component} from 'react'
import Book from './AppBook';
class SearchShelf extends Component{

resultManage =(sBooks)=>{

  const result = sBooks instanceof Array === true ? sBooks.map(bk=><Book key={bk.id} book={bk} func={this.props.func}/>)
  : <h1 className='no-books'>No books available for your entry ...<p className='try-again'>Try another search</p> </h1>
  
  return result
}
    render(){
        return(
         <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.resultManage(this.props.searchBooks)}
              </ol>
            </div>
          </div>
        )
     }
}
export default SearchShelf;