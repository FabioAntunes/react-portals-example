import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  ModalBackdrop,
  ModalContent,
  ModalDialog,
  ModalWrap,
} from './components';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
    this.outerClick = this.outerClick.bind(this);
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
    this.modalRoot.parentNode.style.overflow = '';
  }

  componentWillUpdate(nextProps) {
    if (this.props.show !== nextProps.show) {
      this.modalRoot.parentNode.style.overflow = nextProps.show ? 'hidden' : '';
    }
  }

  componentWillUnmount() {
    this.props.toggle(false);
    this.modalRoot.removeChild(this.el);
  }

  outerClick(event) {
    event.preventDefault();
    if (
      event.target === event.currentTarget ||
      event.target.nodeName.toLowerCase() === 'a'
    ) {
      this.props.toggle(false);
    }
  }

  render() {
    const ModalMarkup = (
      <div>
        <ModalBackdrop show={this.props.show} />
        <ModalWrap show={this.props.show} onClick={this.outerClick}>
          <ModalDialog show={this.props.show}>
            <ModalContent>{this.props.children}</ModalContent>
          </ModalDialog>
        </ModalWrap>
      </div>
    );
    return ReactDOM.createPortal(ModalMarkup, this.el);
  }
}

Modal.defaultProps = {
  show: false,
  toggle: () => {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Modal;
