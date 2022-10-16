import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../Booklist/Book";
import { Loader } from '../Loader/Loader';
import coverImg from "../../images/cover_not_found.jpg"; 
import "./Booklist.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

export const Booklist = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithinCovers = books.map((singleBook) => {
    return {
      ... singleBook,
      //removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });


  if(loading) return <Loader />;
  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithinCovers.slice(0,30).map((item, index) => {
              return (
                <Book key = {index} {... item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Booklist
