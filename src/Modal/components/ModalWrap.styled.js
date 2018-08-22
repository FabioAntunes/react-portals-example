import styled from 'styled-components';
import * as modalProps from './modal.props';

const overflow = `
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1072;
  outline: 0;
  ${props => (props.show ? overflow : 'overflow: hidden;')};
  transition: opacity 0.15s linear, visibility 0.15s linear;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

ModalWrap.defaultProps = modalProps.defaultProps;
ModalWrap.propTypes = modalProps.propTypes;

export default ModalWrap;
