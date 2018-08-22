import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal.component';
import {
  ModalBackdrop,
  ModalContent,
  ModalDialog,
  ModalWrap,
} from './components';

describe('Modal component', () => {
  const Child = () => <div>Yolo</div>;
  let component;

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  afterEach(() => {
    component.unmount();
  });

  it('should render all the styled components and the children', () => {
    component = mount(
      <Modal>
        <Child />
      </Modal>
    );
    expect(component.find(ModalBackdrop).exists()).toBeTruthy();
    expect(component.find(ModalWrap).exists()).toBeTruthy();
    expect(component.find(ModalWrap).contains(ModalDialog)).toBeTruthy();
    expect(component.find(ModalDialog).contains(ModalContent)).toBeTruthy();
    expect(component.find(ModalContent).contains(Child)).toBeTruthy();
  });

  it('should trigger toggle when clicked', () => {
    const toggle = jest.fn();
    component = mount(
      <Modal toggle={toggle}>
        <Child />
      </Modal>
    );

    component.find(ModalWrap).simulate('click');
    expect(toggle.mock.calls).toHaveLength(1);
    expect(toggle.mock.calls[0][0]).toBeFalsy();
  });

  it('should mount modal on the div with id modal-root', () => {
    const modalRoot = global.document.querySelector('#modal-root');
    expect(modalRoot.hasChildNodes()).toBeFalsy();

    component = mount(
      <Modal>
        <Child />
      </Modal>
    );

    expect(modalRoot.hasChildNodes()).toBeTruthy();
  });

  it('clear the div with id modal-root on unmount', () => {
    const modalRoot = global.document.querySelector('#modal-root');

    component = mount(
      <Modal>
        <Child />
      </Modal>
    );

    expect(modalRoot.hasChildNodes()).toBeTruthy();
    component.unmount();
    expect(modalRoot.hasChildNodes()).toBeFalsy();
  });

  it('should set overflow hidden on the boddy element', () => {
    const body = global.document.querySelector('body');
    expect(body.style.overflow).toBeFalsy();

    component = mount(
      <Modal>
        <Child />
      </Modal>
    );

    component.setProps({ show: true });

    expect(body.style.overflow).toEqual('hidden');

    component.setProps({ show: false });
    expect(body.style.overflow).toBeFalsy();
  });
});
