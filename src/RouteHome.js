import React from 'react'
import Shelf from './AppShelf'
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
                  <Shelf name='currentlyReading' books={this.props.books}  func={this.props.func}/>
                  <Shelf name='wantToRead' books={this.props.books} func={this.props.func}/>
                  <Shelf name='read' books={this.props.books} func={this.props.func}/>
                </div>
              </div>
               <div className="open-search">
               <Link className='open-search-link' to='/search' onClick={this.props.clearSearch}>Add a book</Link>
               </div>
            </div>
        )
    }
}
export default RouteHome;
