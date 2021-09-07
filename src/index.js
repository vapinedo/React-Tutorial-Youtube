import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
import { books } from './services/book'
import { Book } from './components/book/book'

function BookList () {
  return (
    <section className="booklist">{books.map(book => {
      return (
        <Book key={book.id} {...book} />
      );
    })}</section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));