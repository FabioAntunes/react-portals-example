import styled from 'styled-components';
import * as modalProps from './modal.props';

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 10px auto;
  pointer-events: none;
  transition: transform 0.3s ease-out;
  transform: translate(0, ${props => (props.show ? 0 : '-25%')});
`;

ModalDialog.defaultProps = modalProps.defaultProps;
ModalDialog.propTypes = modalProps.propTypes;

export default ModalDialog;
