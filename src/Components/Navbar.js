import React , {useContext} from 'react';
import {BookContext} from '../Context/BookContext';

const Navbar = ()=>{
    const {Books} = useContext(BookContext);
    return(
        <div className='Navbar'>
            <h1>Reading List</h1>
            <p>Currently you have {Books.length} books to get through...</p>
        </div>
    )
}
export default Navbar;