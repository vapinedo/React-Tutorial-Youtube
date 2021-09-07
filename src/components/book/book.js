import React from 'react'

export const Book = ({img, title, author}) => {
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