import React , {Component} from 'react'
import logo from '../noImage.jpg'
// Creating and export book component class
class Book extends Component{
    // Define 'shelfUp' to update the book exixting shelf
    shelfUp=(event)=>{
    this.props.func(this.props.book,event.target.value)
  }

    render(){
  
        return(
            <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks !== undefined ?  `url("${this.props.book.imageLinks.thumbnail}")`: `url("${logo}")` }}></div>
                      <div className="book-shelf-changer">
                        {/* Calling 'shelfUp' function when changing shelf inside select menu and set 'none' value for books outside home */}
                        <select onChange={this.shelfUp} value={this.props.book.shelf ? this.props.book.shelf : this.props.book.shelf='none'}> 
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors !== undefined?this.props.book.authors: 'Not available' }</div>
                  </div>
                </li>
        )
    }
}
export default Book;