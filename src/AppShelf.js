import React , {Component} from 'react'
import Book from './AppBook';
class Shelf extends Component{

    render(){
        return(
         <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.filter(book=>this.props.name === book.shelf).map(bk=><Book  book={bk}/>)}
                  
                
                
              </ol>
            </div>
          </div>
        )
     }
}
export default Shelf;