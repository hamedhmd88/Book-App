import { useState } from 'react';
import {books as bookData} from '../constants/mockData';
import styles from './Books.module.css';

import BookCard from './BookCard';
import SideCard from './SideCard';
import SearchBox from './SearchBox';


export default function Books() {

  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);


  const handleLikeList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked([...newLikedList]);
    } else{
      setLiked([...liked, book]);
    }
  };

  const searchHandler = () =>{
    if (search) {
      const newBook = bookData.filter((book) => book.title.toLowerCase().includes(search));
      setBooks(newBook);
    }
    else {
      setBooks(bookData);
    }
      }

  return (
   <>
   <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
     <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
            <BookCard key={book.id} data={book} handleLikeList={handleLikeList}/>
        ))}
      </div>
      {!!liked.length && (

        <div className={styles.favorite}>
          <h4>Favorite</h4>
          {liked.map((book) => (

            <SideCard key={book.id} data={book}/>

            ))}
          </div>
      )}
    </div>
   </>
  )
}
