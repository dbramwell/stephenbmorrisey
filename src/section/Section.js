import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Section extends Component {

  render() {
    return (
      <div className='page'>
        <h2 className='section-header'>{this.props.content.header}</h2>
        <div className='section-contents'>
          <div className='info'>
            {this.props.content.description}
          </div>
          <div className='links'>
            {this.props.content.books.map((book, index) => {
              return <ScrollAnimation offset={0} animateIn={'fadeInRight'} scrollableParentSelector='#app-content'>
              <div key={index} className='book-link'>
                <img src={book.image} alt={book.header} />
                {book.header}
              </div>
              </ScrollAnimation>
            })}
          </div>
        </div>
      </div>
    )
  }
}