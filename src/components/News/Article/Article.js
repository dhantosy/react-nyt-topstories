import React from 'react';
import './Article.scss';

const article = (props) => (
  <article className={props.layout === "list" ? "col-md-12 col-lg-8 offset-lg-2 article__list" : "col-sm-6 col-md-4 col-lg-3 article__card"}>
    <div className='article__item'>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <figure>
          <img src={props.image} alt={props.alt} />
        </figure>
        <div className='article__desc'>
          <div className='article__section'>
            <span>
              {props.section}
            </span>
          </div>
          <h2>{props.title}</h2>
          <div className='article__date'>
            <span>
              {props.date}
            </span>
          </div>
        </div>
      </a>
    </div>
  </article>
);

export default article;