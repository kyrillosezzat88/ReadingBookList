import React , {useState , useContext} from 'react'
import {BookContext} from '../Context/BookContext'

const BookForm = () =>{
    const {dispatch} = useContext(BookContext);
    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('');
    const handelSubmit = (e) =>{
        e.preventDefault();
        dispatch({type:'ADD_BOOK' , book:{
            title, author 
        }})
        setTitle('');
        setAuthor('');
    }
    return(
        <form onSubmit={handelSubmit}>
            <input type='text' value={title} placeholder='Book Title' 
                onChange={(e)=>setTitle(e.target.value)} required />
            <input type='text' value={author} placeholder='Book Author'
                onChange={(e)=> setAuthor(e.target.value)} required />
            <input type='submit' value='Add Book' />
        </form>
    )
}
export default BookForm;