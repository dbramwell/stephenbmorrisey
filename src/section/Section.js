import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from 'react-redux'
import showModal from '../actions/show_modal'
import setModalBookDetails from '../actions/set_modal_book_details'
import {bindActionCreators} from 'redux'
import BookModal from './BookModal'

class Section extends Component {

  constructor(props) {
    super(props)
    this.showModal = this.showModal.bind(this)
  }

  showModal(book) {
    this.props.setModalBookDetails(book)
    this.props.showModal(true)
  }

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
              <ScrollAnimation offset={0} animateIn={'fadeInRight'} scrollableParentSelector='#app-content'>
                {this.props.content.books.map((book, index) => {
                  return <div key={index} className='book-link' onClick={() => this.showModal(book)}>
                    <img src={book.image} alt={book.header} />
                    {book.header}
                  </div>
                })}
              </ScrollAnimation>
            </div>
          </div>
          <BookModal/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showModal,
    setModalBookDetails
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Section)