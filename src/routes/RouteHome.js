import React from 'react'
import Shelf from '../components/AppShelf'
import {Link} from 'react-router-dom'

class RouteHome extends React.Component{
    render(){
        return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {/* Add shelves categories and add props name ,title ,books and func */}
                  <Shelf title='Currently reading' name='currentlyReading' books={this.props.books}  func={this.props.func}/>
                  <Shelf title='Want to read' name='wantToRead' books={this.props.books} func={this.props.func}/>
                  <Shelf title='Read' name='read' books={this.props.books} func={this.props.func}/>
                </div>
              </div>
               <div className="open-search">
                 {/* Use router 'Link' to go to search page instead of button */}
               <Link className='open-search-link' to='/search' onClick={this.props.clearSearch}>Add a book</Link>
               </div>
            </div>
        )
    }
}
export default RouteHome;
