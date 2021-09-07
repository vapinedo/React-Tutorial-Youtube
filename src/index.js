import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

// State
const books = [
  {
    id: 1,
    author: 'John Doe',
    title: 'Silence Hill',
    img: 'https://images.cdn2.buscalibre.com/fit-in/180x180/d9/ee/d9ee3aefe2fc71402e3e373356e01426.jpg'
  },
  {
    id: 2,
    author: 'Mark Smith',
    title: 'Yolo Aventuras',
    img: 'https://images.cdn1.buscalibre.com/fit-in/180x180/21/20/2120b30f06bc887d3f9b450482c02ba9.jpg'
  }
];

function BookList () {
  return (
    <section className="booklist">{books.map(book => {
      return (
        <Book key={book.id} {...book} />
      );
    })}</section>
  );
}

function Book ({img, title, author}) {
  const clickHandler = (e) => {
    console.log('Button has been clicked');
    console.log(e);
    console.log(e.target);
  };
  const onGetAuthor = (author) => {
    console.log(author);
  };

  return (
    <article className="book" onMouseOver={() => { console.log(title) }}>
      <img src={ img } alt={title} />
      <h1>{ title }</h1>
      <small className="author">{ author }</small>
      <button onClick={clickHandler} type="button">See Details</button>
      <button onClick={() => onGetAuthor(author)} type="button">Get Author</button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'));