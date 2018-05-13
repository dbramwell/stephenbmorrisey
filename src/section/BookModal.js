import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import {connect} from 'react-redux'
import showModal from '../actions/show_modal'
import {bindActionCreators} from 'redux'

class BookModal extends Component {

  render() {
    return <Modal show={this.props.shouldShowModal} onHide={() => this.props.showModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.modalData.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modal-description'>
          {this.props.modalData.description}
        </div>
        <div className='modal-image'>
          <img src={this.props.modalData.image} alt={this.props.modalData.header} />
        </div>
      </Modal.Body>
    </Modal>
  }
}

const mapStateToProps = state => {
  return {
    shouldShowModal: state.showModal,
    modalData: state.modalData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookModal)