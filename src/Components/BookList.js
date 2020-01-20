import React , {useContext} from 'react'
import {BookContext} from '../Context/BookContext'
import BookDetails from './BookDetails'
const BookList  = () =>{
    const {Books} = useContext(BookContext);
    return Books.length ? (
        <div className='book-list'>
            <ul>
                {Books.map(book=>{
                    return(<BookDetails book={book} key={book.id}/>);
                })}
            </ul>
        </div>
    ) : (
        <div className='empty'>No Books To Read,Hello Free Time</div>
    )
}
export default BookList;