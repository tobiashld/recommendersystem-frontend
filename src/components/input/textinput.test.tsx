import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './textinput';

test('TextInput focusable',()=>{
   
    render(<TextInput placeholder='test' />)
    screen.getByPlaceholderText('test').focus()
    expect(screen.getByPlaceholderText('test')).toHaveFocus()
   
    
})