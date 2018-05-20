import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import {connect} from 'react-redux'
import showModal from '../actions/show_modal'
import setModalBookDetails from '../actions/set_modal_book_details'
import {bindActionCreators} from 'redux'

class BookLinksAnimation extends Component {
  constructor (props) {
    super(props)
    this.showModal = this.showModal.bind(this)
  }

  showModal (book) {
    this.props.setModalBookDetails(book)
    this.props.showModal(true)
  }

  render () {
    return <ScrollAnimation offset={0} animateIn={'fadeInRight'} scrollableParentSelector='#app-content'>
      {this.props.books.map((book, index) => {
        return <div key={index} className='book-link' onClick={() => this.showModal(book)}>
          <img src={book.image} alt={book.header} />
          {book.header}
        </div>
      })}
    </ScrollAnimation>
  }
}

const mapStateToProps = state => {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    showModal,
    setModalBookDetails
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLinksAnimation)
