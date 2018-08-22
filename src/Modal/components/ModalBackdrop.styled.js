import styled from 'styled-components';
import * as modalProps from './modal.props';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
  transition: opacity 0.25s linear, visibility 0.25s linear;
  opacity: ${props => (props.show ? 0.5 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

ModalBackdrop.defaultProps = modalProps.defaultProps;
ModalBackdrop.propTypes = modalProps.propTypes;

export default ModalBackdrop;
