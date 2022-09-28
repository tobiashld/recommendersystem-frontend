import React from 'react';
import { render, screen } from '@testing-library/react';
import TextInput from './textinput';

test('ErrorComponent renders with title and message',()=>{
   
    render(<TextInput placeholder='test' />)
    screen.getByPlaceholderText('test').focus()
    expect(screen.getByPlaceholderText('test')).toHaveFocus()
   
    
})