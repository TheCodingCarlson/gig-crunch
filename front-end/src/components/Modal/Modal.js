import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  onOuterModalClick(e) {
    const isOutside = !e.target.closest('.modal-inner');

    if (isOutside) {
        this.closeModal();
    }
  }

  render() {
    return (
      <div className={this.state.isOpen ? 'modal-outer open' : 'modal-outer'} onClick={(e) => this.onOuterModalClick(e)}>
        <div className="modal-inner">
            <h3 className="modal-heading">{this.props.heading}</h3>
            <div className="modal-content-wrapper">
              {this.props.children}
            </div>
            <button className="modal-close-button" aria-label="close modal" onClick={() => this.closeModal()}>&times;</button>
        </div>
      </div>
    )
  }
}

export default Modal;
