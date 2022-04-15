import React , {Component} from 'react'
import Book from './AppBook';
class SearchShelf extends Component{

    render(){
        return(
         <div className="bookshelf">
            <h2 className="bookshelf-title"></h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.length>0 ? this.props.books.map(bk=><Book key={bk.id} book={bk} func={this.props.func}/>):<h1>Search to show books </h1>}
                  
                
                
              </ol>
            </div>
          </div>
        )
     }
}
export default SearchShelf;