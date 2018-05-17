import React, { Component } from 'react';
import BookLinksAnimation from './BookLinksAnimation';

class Section extends Component {

  render() {
    return (
      <div className='spacer'>
        <div className='page'>
          <h2 className='section-header'>{this.props.content.header}</h2>
          <div className='section-contents'>
            <div className='info'>
              {this.props.content.description.map((description, index) => {
               return <p key={index}>{description}</p> 
              })}
            </div>
            <div className='links'>
              <BookLinksAnimation books={this.props.content.books}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section