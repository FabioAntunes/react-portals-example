import styled from 'styled-components';

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  max-width: 90%;
  margin: 20px auto;
  outline: 0;
  box-shadow: 5px 5px 12px 3px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export default ModalContent;
