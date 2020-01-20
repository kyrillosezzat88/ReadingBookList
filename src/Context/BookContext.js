import React , {createContext , useReducer ,useEffect} from 'react'
import { BookReducer } from '../Reducers/BookReducer';
export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [Books , dispatch] = useReducer(BookReducer , [] , ()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    })
    // const addBook = (Title , author)=>{
    //     SetBook([...Books , {Title , author , id:uuid()}]);
    // }
    // const removeBook = (id)=>{
    //     SetBook(Books.filter(book=> book.id !== id));
    // }
    useEffect(()=>{
        localStorage.setItem('books' , JSON.stringify(Books))
    },[Books])
    return(
        <BookContext.Provider value={{Books , dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;