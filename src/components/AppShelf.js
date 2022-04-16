import React , {Component} from 'react'
import Book from './AppBook';
// Creating and exporting shelf component class
class Shelf extends Component{

    render(){
        return(
         <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {/* Filtering books to categorize books by shelfs and pass props to book component */}
                {this.props.books.filter(book=>this.props.name === book.shelf).map(bk=><Book key={bk.id} book={bk} func={this.props.func}/>)}
                  
                
                
              </ol>
            </div>
          </div>
        )
     }
}
export default Shelf;