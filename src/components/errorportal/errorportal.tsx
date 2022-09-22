import React from 'react'
import { createPortal } from 'react-dom';

function ErrorPortal(props:{ children: React.ReactNode | React.ReactNode[], wrapperId:string}) {
  if(!props.wrapperId)props.wrapperId = "error-portal-wrapper"
  let element = document.getElementById(props.wrapperId);
  
  if (!element) {
    element = createWrapperAndAppendToBody(props.wrapperId);
  }

  return createPortal(props.children, element);
}

function createWrapperAndAppendToBody(wrapperId:string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export default ErrorPortal